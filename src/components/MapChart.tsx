import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
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

const MapChart: React.FC = () => {
    const [position, setPosition] = useState<Position>({ coordinates: [-87, 38], zoom: 2 }) // Adjusted initial zoom
    const [activeClient, setActiveClient] = useState<Client | null>(null)
    const [showPopup, setShowPopup] = useState(false)
    const [isFullScreen, setIsFullScreen] = useState(false)
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)

    const handleZoomIn = useCallback(() => {
        if (position.zoom >= 4) return
        setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.2 }))
    }, [position.zoom])

    const handleZoomOut = useCallback(() => {
        if (position.zoom <= 1) return
        setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.2 }))
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
            onPinch: ({ offset: [d] }) => {
                setPosition(pos => ({
                    ...pos,
                    zoom: Math.min(Math.max(pos.zoom + d / 50, 1), 4),
                }))
            },
            onDrag: ({ movement: [mx, my] }) => {
                setPosition(pos => ({
                    ...pos,
                    coordinates: [pos.coordinates[0] - mx / 100 / pos.zoom, pos.coordinates[1] + my / 100 / pos.zoom],
                }))
            },
        },
        {
            target: mapContainerRef,
            eventOptions: { passive: false },
        }
    )

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setShowPopup(false)
                setActiveClient(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [showPopup])

    const calculateMarkerSize = (zoom: number) => {
        return Math.max(20 / zoom, 2) // Adjust marker size based on zoom
    }

    return (
        <div ref={mapContainerRef}
            className={`relative ${isFullScreen ? 'fixed inset-0 z-50' : 'mx-auto h-auto w-full px-4'} bg-n-light dark:bg-n-dark`}>
            <div className="aspect-video md:aspect-[9/12] w-full">
                <ComposableMap
                    projection="geoAlbersUsa"
                    className={`w-full ${isFullScreen ? 'h-screen' : 'h-full'}`}>
                    <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                        <Geographies geography={geoUrl}>
                            {({ geographies }) =>
                                geographies.map(geo => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill="#D6D6DA"
                                        stroke="#FFFFFF"
                                        className="transition-colors duration-200 ease-in-out outline-none hover:fill-s-light focus:fill-s-light dark:fill-n-6 dark:stroke-n-9 dark:hover:fill-s"
                                    />
                                ))
                            }
                        </Geographies>
                        {clients.map(client => (
                            <Marker key={client.name} coordinates={client.coordinates}>
                                <motion.circle
                                    r={calculateMarkerSize(position.zoom)}
                                    fill="#33B588"
                                    stroke="#fff"
                                    strokeWidth={2 / position.zoom}
                                    className="cursor-pointer"
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => {
                                        setActiveClient(client)
                                        setShowPopup(true)
                                    }}
                                    transition={{ duration: 0.15 }}
                                />
                            </Marker>
                        ))}
                    </ZoomableGroup>
                </ComposableMap>
            </div>
            <div className="absolute flex flex-col space-y-2 right-4 top-4">
                <motion.button
                    onClick={handleZoomIn}
                    className="px-3 py-1 border rounded shadow border-p-3 bg-p text-n-light hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    +
                </motion.button>
                <motion.button
                    onClick={handleZoomOut}
                    className="px-3 py-1 border rounded shadow border-p-3 bg-p text-n-light hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    -
                </motion.button>
                <motion.button
                    onClick={toggleFullScreen}
                    className="px-3 py-1 border rounded shadow border-p-3 bg-p text-n-light hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    {isFullScreen ? 'Exit' : 'Full'}
                </motion.button>
            </div>
            <AnimatePresence>
                {showPopup && activeClient && (
                    <motion.div
                    ref={popupRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-auto right-auto w-64 p-4 border-2 rounded-md shadow-sm popup bottom-1/2 border-n-7 bg-n-light shadow-s/30 dark:border-n-4 dark:bg-n-dark md:left-4 md:right-0 md:w-1/3 md:border-4 md:p-6">
                        <button
                            onClick={() => setShowPopup(false)}
                            className="absolute right-2 top-2 text-n-5 hover:text-n-7 dark:text-n-3 dark:hover:text-n-1">
                            ✕
                        </button>
                        <img
                            src={images[activeClient.logo]}
                            alt={`${activeClient.name} logo`}
                            className="object-contain w-16 h-16 mb-2"
                        />
                        <h3 className="font-bold text-p-dark dark:text-s-light">{activeClient.name}</h3>
                        <p className="text-sm text-n-7 dark:text-n-3">{activeClient.description}</p>
                        <a
                            href={activeClient.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-200 text-a hover:text-a-light dark:text-s dark:hover:text-s-light">
                            Visit Website
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default memo(MapChart)