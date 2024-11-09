/* eslint-disable no-undef */
/** @format */

import { put } from '@vercel/blob'

export async function uploadToVercelBlob(file: File) {
	const { url } = await put(file.name, file, {
		access: 'public',
	})
	return url
}
