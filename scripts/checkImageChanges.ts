import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import 'dotenv/config'

interface ImageMap {
	[key: string]: {
		url: string
		hash: string
	}
}

async function getFileHash(filePath: string): Promise<string> {
	const fileBuffer = await fs.readFile(filePath)
	const hashSum = crypto.createHash('sha256')
	hashSum.update(fileBuffer)
	return hashSum.digest('hex')
}

async function checkImageChanges() {
	const imageDir = path.join(process.cwd(), 'public', 'images')
	const faviconDir = path.join(process.cwd(), 'public')
	const mapPath = path.join(process.cwd(), 'src', 'imageUrls.json')

	let existingMap: ImageMap = {}
	try {
		const mapContent = await fs.readFile(mapPath, 'utf-8')
		existingMap = JSON.parse(mapContent)
	} catch (error) {
		console.error('An error occurred:', error)
		process.exit(1)
	}

	// Gather files from both the 'images' subdirectory and the root 'public' directory
	const imageFiles = (await fs.readdir(imageDir))
		.filter(file => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file))
		.map(file => path.join(imageDir, file))

	const faviconFiles = (await fs.readdir(faviconDir))
		.filter(file => /\.(ico|png|svg)$/i.test(file))
		.map(file => path.join(faviconDir, file))

	const allFiles = [...imageFiles, ...faviconFiles]

	// Check each file's hash against the existing map
	for (const filePath of allFiles) {
		const fileName = path.basename(filePath)
		const currentHash = await getFileHash(filePath)
		if (!existingMap[fileName] || existingMap[fileName].hash !== currentHash) {
			console.log(`Changes detected in ${fileName}. Run upload-images script.`)
			process.exit(1)
		}
	}

	console.log('No image changes detected.')
	process.exit(0)
}

checkImageChanges().catch(console.error)
