import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { put } from '@vercel/blob';
import 'dotenv/config';
async function getFileHash(filePath) {
    const fileBuffer = await fs.readFile(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}
async function uploadImage(filePath, fileName, existingHash) {
    const currentHash = await getFileHash(filePath);
    if (existingHash && currentHash === existingHash) {
        console.log(`Skipping ${fileName}, no changes detected.`);
        return null;
    }
    const file = await fs.readFile(filePath);
    const { url } = await put(fileName, file, { access: 'public' });
    console.log(`Uploaded ${fileName}`);
    return { fileName, url, hash: currentHash };
}
async function uploadAllImages() {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
        console.error('BLOB_READ_WRITE_TOKEN is not set in the environment');
        process.exit(1);
    }
    const publicDir = path.join(process.cwd(), 'public');
    const srcAssetsDir = path.join(process.cwd(), 'src', 'assets');
    const mapPath = path.join(process.cwd(), 'src', 'imageUrls.json');
    let existingMap = {};
    try {
        const mapContent = await fs.readFile(mapPath, 'utf-8');
        existingMap = JSON.parse(mapContent);
    }
    catch (error) {
        console.error('An error occurred while reading the existing map:', error);
    }
    const allFiles = [];
    async function getImageFiles(dir) {
        try {
            const entries = await fs.readdir(dir, { withFileTypes: true });
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                if (entry.isDirectory()) {
                    await getImageFiles(fullPath);
                }
                else if (/\.(jpg|jpeg|png|webp|svg|gif|ico|JPG|JPEG|PNG|WEBP|SVG|GIF|ICO)$/i.test(entry.name)) {
                    allFiles.push(fullPath);
                }
            }
        }
        catch (error) {
            console.error(`Error reading directory ${dir}:`, error);
        }
    }
    await getImageFiles(publicDir);
    await getImageFiles(srcAssetsDir);
    console.log(`Found ${allFiles.length} image files`);
    const results = await Promise.all(allFiles.map(async (filePath) => {
        const fileName = path.relative(process.cwd(), filePath);
        const result = await uploadImage(filePath, fileName, existingMap[fileName]?.hash);
        console.log(`Processed: ${fileName} - ${result ? 'Uploaded' : 'Skipped'}`);
        return result;
    }));
    const newMap = results.reduce((acc, result) => {
        if (result) {
            acc[result.fileName] = { url: result.url, hash: result.hash };
        }
        return acc;
    }, {});
    const updatedMap = { ...existingMap, ...newMap };
    await fs.writeFile(mapPath, JSON.stringify(updatedMap, null, 2));
    console.log('Image upload complete. URL map updated.');
}
uploadAllImages().catch(console.error);
