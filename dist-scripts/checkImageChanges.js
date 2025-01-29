import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import 'dotenv/config';
async function getFileHash(filePath) {
    const fileBuffer = await fs.readFile(filePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    return hashSum.digest('hex');
}
async function checkImageChanges() {
    const imageDirs = [
        path.join(process.cwd(), 'src', 'assets'),
        path.join(process.cwd(), 'public')
    ];
    const mapPath = path.join(process.cwd(), 'src', 'imageUrls.json');
    let existingMap = {};
    try {
        const mapContent = await fs.readFile(mapPath, 'utf-8');
        existingMap = JSON.parse(mapContent);
    }
    catch (error) {
        console.error('An error occurred:', error);
        process.exit(1);
    }
    for (const imageDir of imageDirs) {
        try {
            const files = await fs.readdir(imageDir, { withFileTypes: true });
            for (const file of files) {
                if (file.isDirectory()) {
                    await checkDirectory(path.join(imageDir, file.name), existingMap);
                }
                else if (/\.(jpg|jpeg|png|webp|svg|gif|ico|JPG|JPEG|PNG|WEBP|SVG|GIF|ICO)$/i.test(file.name)) {
                    const filePath = path.join(imageDir, file.name);
                    const relativePath = path.relative(process.cwd(), filePath);
                    const currentHash = await getFileHash(filePath);
                    if (!existingMap[relativePath] || existingMap[relativePath].hash !== currentHash) {
                        console.log(`Changes detected in ${relativePath}. Run upload-images script.`);
                        process.exit(1);
                    }
                }
            }
        }
        catch (error) {
            console.error(`Error reading directory ${imageDir}:`, error);
        }
    }
    console.log('No image changes detected.');
    process.exit(0);
}
async function checkDirectory(dir, existingMap) {
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        if (file.isDirectory()) {
            await checkDirectory(fullPath, existingMap);
        }
        else if (/\.(jpg|jpeg|png|webp|svg|gif|ico|JPG|JPEG|PNG|WEBP|SVG|GIF|ICO)$/i.test(file.name)) {
            const relativePath = path.relative(process.cwd(), fullPath);
            const currentHash = await getFileHash(fullPath);
            if (!existingMap[relativePath] || existingMap[relativePath].hash !== currentHash) {
                console.log(`Changes detected in ${relativePath}. Run upload-images script.`);
                process.exit(1);
            }
        }
    }
}
checkImageChanges().catch(console.error);
