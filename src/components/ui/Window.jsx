/** @format */

import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Window() {
	const [isCopied, setIsCopied] = useState(false)

	const codeString = `
import {useEffect} from 'react'

export const useImgPadding = (contentHeight: boolean = false): void => {
	useEffect(() => {
		const setImgPadding = () => {
			let padding
			if (window.innerWidth <= 768) {
				padding = contentHeight ? '0.5rem' : '0.25rem' // Small screens
			} else if (window.innerWidth <= 1024) {
				padding = contentHeight ? '1rem' : '2rem' // Medium screens
			} else {
				padding = contentHeight ? '2rem' : '4rem' // Large screens
			}
			document.documentElement.style.setProperty('--content-padding', padding)
		}

		setImgPadding()
		window.addEventListener('resize', setImgPadding)
		return () => window.removeEventListener('resize', setImgPadding)
	}, [contentHeight])
}
`

	const handleCopy = () => {
		navigator.clipboard.writeText(codeString)
		setIsCopied(true)
		setTimeout(() => setIsCopied(false), 2000)
	}

	return (
		<>

			<div className="flex items-center justify-between px-4 py-2 shadow-lg rounded-t-md border-1 border-n-5 bg-base-300">
				<div className="flex space-x-2">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
				<button onClick={handleCopy} className="text-xs text-gray-500 transition hover:text-gray-700">
					{isCopied ? 'Copied!' : 'Copy Code'}
				</button>
			</div>
			<div className="flex justify-start shadow-lg border-1 rounded-b-md border-n-5 bg-p">
				<div style={{ flex: 1, width: '100%', flexDirection: 'column' }}>
					<SyntaxHighlighter
						language="typescript"
						style={oneDark}
						wrapLines={true}
						lineProps={{ style: { whiteSpace: 'wrap', } }}
						className="h-24 text-xs lg:text-md md:h-36 md:text-sm lg:h-48 bg-p">
						{codeString}
					</SyntaxHighlighter>
				</div>
			</div>

		</>
	)
}
