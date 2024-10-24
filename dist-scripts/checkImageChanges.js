/** @format */

import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'
import 'dotenv/config'
async function getFileHash(filePath) {
	const fileBuffer = await fs.readFile(filePath)
	const hashSum = crypto.createHash('sha256')
	hashSum.update(fileBuffer)
	return hashSum.digest('hex')
}
async function checkImageChanges() {
	const imageDir = path.join(process.cwd(), 'public', 'images')
	const mapPath = path.join(process.cwd(), 'src', 'imageUrls.json')
	let existingMap = {}
	try {
		const mapContent = await fs.readFile(mapPath, 'utf-8')
		existingMap = JSON.parse(mapContent)
	} catch (error) {
		console.error('An error occurred:', error)
		process.exit(1)
	}
	const files = await fs.readdir(imageDir)
	const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp|svg|gif)$/i.test(file))
	for (const file of imageFiles) {
		const filePath = path.join(imageDir, file)
		const currentHash = await getFileHash(filePath)
		if (!existingMap[file] || existingMap[file].hash !== currentHash) {
			console.log(`Changes detected in ${file}. Run upload-images script.`)
			process.exit(1)
		}
	}
	console.log('No image changes detected.')
	process.exit(0)
}
checkImageChanges().catch(console.error)
