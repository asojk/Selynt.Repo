

import React, {memo, useState, useEffect, useCallback, useRef, forwardRef} from 'react'


import {ZoomableGroup, ComposableMap, Geographies, Geography, Marker} from 'react-simple-maps'
import { motion, AnimatePresence } from 'framer-motion'
import { useGesture } from '@use-gesture/react'
import { clients } from '@/constants/clients'
import { ImageKeys, images } from '@/lib/assets'

export interface Client {
	name: string
	coordinates: [number, number]
	logo: ImageKeys
	url: string
	description: string
}

interface Position {
	coordinates: [number, number]
	zoom: number
}

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

// eslint-disable-next-line react/display-name
const ForwardedComposableMap = forwardRef<
	SVGSVGElement,
	React.ComponentProps<typeof ComposableMap>
>((props) => <ComposableMap {...props} />)

const MapChart: React.FC = () => {
	const [position, setPosition] = useState<Position>({coordinates: [-98, 38], zoom: 1})
	const [activeClient, setActiveClient] = useState<Client | null>(null)
	const [showPopup, setShowPopup] = useState(false)
	const [isFullScreen, setIsFullScreen] = useState(false)
	const mapRef = useRef<SVGSVGElement>(null)
	const mapContainerRef = useRef<HTMLDivElement>(null)

	const handleZoomIn = useCallback(() => {
		if (position.zoom >= 4) return
		setPosition((pos) => ({...pos, zoom: pos.zoom * 1.2}))
	}, [position.zoom])

	const handleZoomOut = useCallback(() => {
		if (position.zoom <= 1) return
		setPosition((pos) => ({...pos, zoom: pos.zoom / 1.2}))
	}, [position.zoom])

	const handleMoveEnd = useCallback((position: Position) => {
		setPosition(position)
	}, [])

	const toggleFullScreen = () => {
		setIsFullScreen(!isFullScreen)
		if (!isFullScreen) {
			mapContainerRef.current?.requestFullscreen()
		} else if (document.fullscreenElement) {
			document.exitFullscreen()
		}
	}

	useGesture(
		{
			onPinch: ({offset: [d]}) => {
				setPosition((pos) => ({
					...pos,
					zoom: Math.min(Math.max(pos.zoom + d / 50, 1), 4)
				}))
			},
			onDrag: ({movement: [mx, my]}) => {
				setPosition((pos) => ({
					...pos,
					coordinates: [
						pos.coordinates[0] - mx / 100 / pos.zoom,
						pos.coordinates[1] + my / 100 / pos.zoom
					]
				}))
			}
		},
		{
			target: mapRef,
			eventOptions: {passive: false}
		}
	)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (showPopup && !(event.target as HTMLElement).closest('.popup')) {
				setShowPopup(false)
				setActiveClient(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [showPopup])

	return (
		<div
			ref={mapContainerRef}
			className={`relative ${isFullScreen ? 'fixed inset-0 z-50' : 'mx-auto h-auto w-full max-w-4xl px-4 sm:px-12'} bg-n-light dark:bg-n-dark`}>
			<ForwardedComposableMap
				projection='geoAlbersUsa'
				className={`w-full ${isFullScreen ? 'h-screen' : 'h-full'}`}
				ref={mapRef}>
				<ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
					<Geographies geography={geoUrl}>
						{({geographies}) =>
							geographies.map((geo) => (
								<Geography
									key={geo.rsmKey}
									geography={geo}
									fill='#D6D6DA'
									stroke='#FFFFFF'
									className='outline-none transition-colors duration-200 ease-in-out hover:fill-s-light focus:fill-s-light dark:fill-n-6 dark:stroke-n-9 dark:hover:fill-s'
								/>
							))
						}
					</Geographies>
					{clients.map((client) => (
						<Marker key={client.name} coordinates={client.coordinates}>
							<motion.circle
								r={10 / position.zoom}
								fill='#33B588'
								stroke='#fff'
								strokeWidth={2 / position.zoom}
								className='cursor-pointer'
								whileHover={{scale: 1.5}}
								whileTap={{scale: 0.9}}
								onClick={() => {
									setActiveClient(client)
									setShowPopup(true)
								}}
								transition={{duration: 0.2}}
							/>
						</Marker>
					))}
				</ZoomableGroup>
			</ForwardedComposableMap>
			<div className='absolute right-4 top-4 flex flex-col space-y-2'>
				<motion.button
					onClick={handleZoomIn}
					className='rounded border border-p-3 bg-p px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}>
					+
				</motion.button>
				<motion.button
					onClick={handleZoomOut}
					className='rounded border border-p-3 bg-p px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}>
					-
				</motion.button>
				<motion.button
					onClick={toggleFullScreen}
					className='rounded border border-p-3 bg-p px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
					whileHover={{scale: 1.05}}
					whileTap={{scale: 0.95}}>
					{isFullScreen ? 'Exit' : 'Full'}
				</motion.button>
			</div>
			<AnimatePresence>
				{showPopup && activeClient && (
					<motion.div
						initial={{opacity: 0, y: -20}}
						animate={{opacity: 1, y: 0}}
						exit={{opacity: 0, y: -20}}
						transition={{duration: 0.3}}
						className='popup absolute bottom-1/2 left-auto right-auto w-64 rounded-md border-2 border-n-7 bg-n-light p-4 shadow-sm shadow-s/30 dark:border-n-4 dark:bg-n-dark md:left-4 md:right-0 md:w-1/3 md:border-4 md:p-6'>
						<button
							onClick={() => setShowPopup(false)}
							className='absolute right-2 top-2 text-n-5 hover:text-n-7 dark:text-n-3 dark:hover:text-n-1'>
							✕
						</button>
						<img
							src={images[activeClient.logo]}
							alt={`${activeClient.name} logo`}
							className='mb-2 h-16 w-16 object-contain'
						/>
						<h3 className='font-bold text-p-dark dark:text-s-light'>{activeClient.name}</h3>
						<p className='text-sm text-n-7 dark:text-n-3'>{activeClient.description}</p>
						<a
							href={activeClient.url}
							target='_blank'
							rel='noopener noreferrer'
							className='text-a transition-colors duration-200 hover:text-a-light dark:text-s dark:hover:text-s-light'>
							Visit Website
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default memo(MapChart)
