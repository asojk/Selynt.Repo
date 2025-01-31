import React, { useState, useCallback, useRef, useEffect } from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { motion, AnimatePresence } from 'motion/react'
import { useGesture } from '@use-gesture/react'
import { clients } from '../constants/clients'
import { useKbdOutside } from '../hooks/use-kbd-or-outside'
import { ImageKeys, images } from '../constants/assets'
import ErrorBoundary from '@/constants/error-boundary'
import { IconChevronRight } from '@tabler/icons-react'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

export interface Client {
    name: string
    detail: string
    coordinates: [number, number]
    logo: ImageKeys
    url: string
    description: string
}

interface Position {
    coordinates: [number, number]
    zoom: number
}

interface MapChartProps {
    setActiveClient: (client: Client | null) => void
    setShowPopup: (show: boolean) => void
}

const MapChart: React.FC<MapChartProps> = ({}) => {
    const [position, setPosition] = useState<Position>({ coordinates: [-90, 43], zoom: 2.5 })
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [expandedClient, setExpandedClient] = useState<string | null>(null)
    const mapContainerRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const activeClientRef = useKbdOutside(!!expandedClient, () => setExpandedClient(null))
    const cardListRef = useRef<HTMLDivElement>(null)

    const handleMoveEnd = useCallback((position: { coordinates: [number, number]; zoom: number }) => {
        const [longitude, latitude] = position.coordinates
        const newLongitude = Math.min(Math.max(longitude, -180), 180)
        const newLatitude = Math.min(Math.max(latitude, -90), 90)
        const newZoom = Math.max(1, Math.min(4, position.zoom)) // Limit zoom between 1 and 4

        setPosition({
            coordinates: [newLongitude, newLatitude],
            zoom: newZoom,
        })
    }, [])

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen)
        if (!isFullScreen) {
            mapContainerRef.current?.requestFullscreen()
        } else if (document.fullscreenElement) {
            document.exitFullscreen()
        }
    }

    const handleZoomIn = () => {
        setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.2, 4) }))
    }

    const handleZoomOut = () => {
        setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.2, 1) }))
    }

    useGesture(
        {
            onPinch: ({ offset: [d] }) => {
                setPosition((pos) => ({
                    ...pos,
                    zoom: Math.min(Math.max(pos.zoom + d / 50, 1), 4),
                }))
            },
            onDrag: ({ movement: [mx, my] }) => {
                setPosition((pos) => ({
                    ...pos,
                    coordinates: [pos.coordinates[0] - mx / 200 / pos.zoom, pos.coordinates[1] + my / 200 / pos.zoom],
                }))
            },
        },
        {
            target: mapContainerRef,
            eventOptions: { passive: false },
        }
    )

    const calculateMarkerSize = (zoom: number) => {
        return Math.max(20 / (zoom * zoom), 8)
    }

    const handleScroll = useCallback(
        (deltaY: number) => {
            if (cardListRef.current) {
                const newScrollPosition = scrollPosition + deltaY
                const maxScroll = cardListRef.current.scrollHeight - cardListRef.current.clientHeight
                setScrollPosition(Math.max(0, Math.min(newScrollPosition, maxScroll)))
            }
        },
        [scrollPosition]
    )

    useGesture(
        {
            onDrag: ({ movement: [_, my] }) => handleScroll(my),
            onWheel: ({ delta: [_, dy] }) => handleScroll(dy),
        },
        {
            target: cardListRef,
            eventOptions: { passive: false },
        }
    )

    const handleCardClick = useCallback(
        (client: Client) => {
            setExpandedClient(expandedClient === client.name ? null : client.name)

            // Calculate the offset based on the current zoom level and screen size
            const offsetRem = -4
            const offsetX = (((offsetRem * 12) / window.innerWidth) * 360) / position.zoom
            setPosition({
                coordinates: [
                    client.coordinates[0] + offsetX,
                    client.coordinates[1],
                ],
                zoom: 4,
            })
        },
        [expandedClient, position.zoom]
    )

    const scrollCardsRight = () => {
        if (cardListRef.current) {
            cardListRef.current.scrollBy({ left: 200, behavior: 'smooth' })
        }
    }

    const [isScrollNeeded, setIsScrollNeeded] = useState(false)

    const checkScrollNeeded = useCallback(() => {
        if (cardListRef.current) {
            const { scrollWidth, clientWidth } = cardListRef.current
            setIsScrollNeeded(scrollWidth > clientWidth)
        }
    }, [])

    useEffect(() => {
        checkScrollNeeded()
        window.addEventListener('resize', checkScrollNeeded)
        return () => window.removeEventListener('resize', checkScrollNeeded)
    }, [checkScrollNeeded])

    useEffect(() => {
        checkScrollNeeded()
    }, [clients, checkScrollNeeded])

    return (
        <ErrorBoundary>
          <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 flex items-center justify-center bg-black/60' >


            <div className='relative w-[90vw] max-w-3xl h-full max-h-[80vh] rounded-xl bg-grey-6'>
                {/* Map Container */}
                <div className='absolute inset-0 z-0'>
                    <ComposableMap projection='geoAlbersUsa' className='h-full w-full'>
                        <ZoomableGroup zoom={position.zoom} center={position.coordinates} onMoveEnd={handleMoveEnd}>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo) => (
                                        <Geography
                                            key={geo.rsmKey}
                                            geography={geo}
                                            className='fill-p-4 stroke-white outline-none transition-colors duration-200 ease-in-out hover:fill-p-2 focus:fill-s-light dark:fill-n-6 dark:stroke-n-8 dark:hover:fill-s'
                                        />
                                    ))
                                }
                            </Geographies>
                            {clients.map((client) => (
                                <Marker key={client.name} coordinates={client.coordinates}>
                                    <motion.circle
                                        r={calculateMarkerSize(position.zoom)}
                                        fill='#33B588'
                                        stroke='rgba(0,0,0,0.7)'
                                        strokeWidth={2 / position.zoom}
                                        className='cursor-pointer'
                                        whileHover={{ scale: 1.5 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => handleCardClick(client)}
                                        transition={{ duration: 0.15 }}
                                    />
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                    <div className='absolute right-4 top-1/2 flex flex-col space-y-2'>
                        {/* Zoom Controls */}
                        <motion.button
                            onClick={handleZoomIn}
                            className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            +
                        </motion.button>
                        <motion.button
                            onClick={handleZoomOut}
                            className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            -
                        </motion.button>
                        <motion.button
                            onClick={toggleFullScreen}
                            className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {isFullScreen ? 'Exit' : 'Full'}
                        </motion.button>
                    </div>
                </div>

                {/* Client Cards */}
                <div className='absolute bottom-0 left-0 right-0 z-10 p-2'>
                    <div className='relative'>
                        <div ref={cardListRef} className='custom-scrollbar overflow-x-scroll pb-4'>
                            <div className='flex space-x-4'>
                                {clients.map((client) => (
                                    <motion.div
                                        key={client.name}
                                        className='relative mb-4 w-52 cursor-pointer rounded-lg bg-gray-100 p-2 shadow-sm hover:bg-gray-200 dark:bg-b-4 dark:hover:bg-p-dark'
                                        onClick={() => handleCardClick(client)}
                                        whileHover={{ scale: expandedClient === client.name ? 1 : 1.05 }}
                                        whileTap={{ scale: expandedClient === client.name ? 1 : 0.95 }}
                                    >
                                        <div className='flex flex-col items-center overflow-hidden'>
                                            <motion.div className='h-24 w-24 overflow-hidden' whileHover={{ scale: 1.1 }}>
                                                <img
                                                    src={images[client.logo]}
                                                    alt={`${client.name} logo`}
                                                    className='h-full w-full object-contain p-2'
                                                />
                                            </motion.div>
                                            <h3 className='line-clamp-2 pt-2 text-center text-sm font-medium text-gray-800 dark:text-white sm:text-base'>
                                                {client.name}
                                            </h3>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Scroll Button */}
                        {isScrollNeeded && (
                            <button
                                onClick={scrollCardsRight}
                                className='absolute right-2 -bottom-8 rounded-full bg-p-3 px-3 py-2 text-white shadow-sm shadow-black/60'>
                                <IconChevronRight className='h-5 w-5' />
                            </button>
                        )}
                    </div>

                    {/* Expanded Client Info */}
                    <AnimatePresence>
                        {expandedClient && (
                            <motion.div
                                ref={activeClientRef}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className='absolute bottom-3/4 left-0 right-0 z-50 max-h-[80vh] w-[90%] max-w-md rounded-md border-4  mx-auto justify-center border-p-2 bg-white p-4 shadow-lg dark:border-p-4 dark:bg-p-5 dark:text-white lg:w-[60%] lg:max-w-[80vw] lg:p-6'
                            >
                                <button
                                    onClick={() => setExpandedClient(null)}
                                    className='absolute right-4 top-4 text-n-9 dark:text-n-1 hover:text-n-7'
                                >
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-6 w-6'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                                    </svg>
                                </button>
                                {clients.map((client) => {
                                    if (client.name === expandedClient) {
                                        return (
                                            <div key={client.name} className='flex flex-col items-center'>
                                                <img
                                                    src={images[client.logo]}
                                                    alt={`${client.name} logo`}
                                                    className='mb-4 h-32 w-32 object-contain'
                                                />
                                                <h2 className='mb-2 text-center text-xl font-bold text-n-900 dark:text-white md:text-2xl'>
                                                    {client.name}
                                                </h2>
                                                <p className='mt-1 text-center text-sm font-semibold text-gray-800 dark:text-n-3 md:text-base'>
                                                    {client.detail}
                                                </p>
                                                <p className='mt-2 text-center text-sm text-n-900 dark:text-white md:text-base'>
                                                    {client.description}
                                                </p>
                                                {client.url && (
                                                    <a
                                                        href={client.url}
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        className='mt-4 inline-block rounded-md bg-p px-4 py-2 text-white transition-colors duration-200 hover:bg-p-dark text-center'
                                                    >
                                                        Visit Website
                                                    </a>
                                                )}
                                            </div>
                                        )
                                    }
                                    return null
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            </motion.div>
        </ErrorBoundary>
    )
}

export default MapChart