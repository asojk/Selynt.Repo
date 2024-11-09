import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import { put } from '@vercel/blob'
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

async function uploadImage(filePath: string, fileName: string, existingHash?: string) {
	const currentHash = await getFileHash(filePath)
	if (existingHash && currentHash === existingHash) {
		console.log(`Skipping ${fileName}, no changes detected.`)
		return null
	}

	const file = await fs.readFile(filePath)
	const { url } = await put(fileName, file, { access: 'public' })
	console.log(`Uploaded ${fileName}`)
	return { fileName, url, hash: currentHash }
}

async function uploadAllImages() {
	const imageDir = path.join(process.cwd(), 'public', 'images')
	const faviconDir = path.join(process.cwd(), 'public')

	const mapPath = path.join(process.cwd(), 'src', 'imageUrls.json')

	let existingMap: ImageMap = {}
	try {
		const mapContent = await fs.readFile(mapPath, 'utf-8')
		existingMap = JSON.parse(mapContent)
	} catch (error) {
		console.error('An error occurred:', error)
	}

	// Get files from both 'images' and 'public' root directory
	const imageFiles = (await fs.readdir(imageDir))
		.filter(file => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file))
		.map(file => path.join(imageDir, file))

	const faviconFiles = (await fs.readdir(faviconDir))
		.filter(file => /\.(ico|png|svg)$/i.test(file)) // Only .ico, .png, .svg in the 'public' root directory
		.map(file => path.join(faviconDir, file))

	const allFiles = [...imageFiles, ...faviconFiles]

	const results = await Promise.all(
		allFiles.map(async filePath => {
			const fileName = path.basename(filePath)
			return uploadImage(filePath, fileName, existingMap[fileName]?.hash)
		})
	)

	const newMap = results.reduce((acc, result) => {
		if (result) {
			acc[result.fileName] = { url: result.url, hash: result.hash }
		}
		return acc
	}, {} as ImageMap)

	const updatedMap = { ...existingMap, ...newMap }

	await fs.writeFile(mapPath, JSON.stringify(updatedMap, null, 2))

	console.log('Image upload complete. URL map updated.')
}

uploadAllImages().catch(console.error)
