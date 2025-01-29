import React, { useState, useCallback, useRef } from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { motion, AnimatePresence } from 'motion/react'
import { useGesture } from '@use-gesture/react'
import { clients } from '../constants/clients'
import { ImageKeys, images } from '../constants/assets'
import ErrorBoundary from '@/constants/error-boundary'

const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

export interface Client {
	name: string
	detail: string;
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

const MapChart: React.FC<MapChartProps> = ({  }) => {
  const [position, setPosition] = useState<Position>({ coordinates: [-95, 43], zoom: 2 })
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [expandedClient, setExpandedClient] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
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
    setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.2, 3) }))
  }

  const handleZoomOut = () => {
    setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.2, 1) }))
  }

  useGesture(
    {
      onPinch: ({ offset: [d] }) => {
        setPosition((pos) => ({
          ...pos,
          zoom: Math.min(Math.max(pos.zoom + d / 50, 1), 3),
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
    const baseSize = 10 // Base size of the marker
    const minSize = 2 // Minimum size of the marker
    return Math.max(baseSize / (zoom * zoom), minSize)
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
      const offsetRem = -4; // Adjust this value to fine-tune the offset
      const offsetX = (offsetRem * 12 / window.innerWidth) * 360 / position.zoom;
      setPosition({
        coordinates: [
          client.coordinates[0] + offsetX, // Offset the longitude to the right
          client.coordinates[1]
        ],
        zoom: 4, // You can adjust this zoom level as needed
      })
    },
    [expandedClient, position.zoom]
  )

  return (
    <ErrorBoundary>
      <div className="relative h-full w-full">
        <div
          ref={mapContainerRef}
          className={`absolute inset-0 ${isFullScreen ? 'z-50' : ''} bg-n-5 dark:bg-n-dark`}
        >
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
                    stroke='#ccc'
                    strokeWidth={1 / position.zoom}
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
          <div className='absolute right-4 top-4 flex flex-col space-y-2'>
            <motion.button
              onClick={handleZoomIn}
              className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              +
            </motion.button>
            <motion.button
              onClick={handleZoomOut}
              className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              -
            </motion.button>
            <motion.button
              onClick={toggleFullScreen}
              className='rounded border border-a-light bg-a-dark px-3 py-1 text-n-light shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              {isFullScreen ? 'Exit' : 'Full'}
            </motion.button>
          </div>
					</div>

				<div className="absolute left-0 top-0 bottom-0 w-32 lg:w-72 overflow-hidden bg-white/80 dark:bg-black/80 p-3 shadow-md shadow-black/60 z-10">
          <div ref={cardListRef} className="h-full overflow-y-clip custom-scrollbar">
            <motion.div style={{ y: -scrollPosition }} className='space-y-4'>
              {clients.map((client) => (
                <motion.div
                  key={client.name}
                  className={`cursor-pointer rounded-lg bg-gray-100 text-black dark:text-white dark:bg-p-5 p-2 shadow-md shadow-p dark:hover:bg-p-dark dark:shadow-black/40 relative`}
                  onClick={() => handleCardClick(client)}
                  whileHover={{ scale: expandedClient === client.name ? 1 : 1.05 }}
                  whileTap={{ scale: expandedClient === client.name ? 1 : 0.95 }}
                >
                  <div className='flex flex-col items-center'>
                    <img
                      src={images[client.logo]}
                      alt={`${client.name} logo`}
                      className='h-12 w-12 lg:h-24 lg:w-24 object-contain'
                    />
                    <h3 className='text-base text-center font-semibold text-wrap'>{client.name}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {expandedClient && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="absolute left-32 lg:left-72 top-0 bottom-0 w-64 lg:w-96 bg-white/90 dark:bg-p-5/[92%] border-8 border-p-2 dark:border-p-4 rounded-md p-dark m-3 shadow-lg z-20 overflow-y-auto p-4"
            >
              {clients.map((client) => {
                if (client.name === expandedClient) {
                  return (
                    <div key={client.name}>
                      <img
                        src={images[client.logo]}
                        alt={`${client.name} logo`}
                        className='h-24 w-24 lg:h-32 lg:w-32 object-contain mx-auto mb-4'
                      />
                      <h2 className="text-xl font-bold mb-2 text-n-900 dark:text-white">{client.name}</h2>
											<p className='mt-1 text-base font-semibold text-gray-800 dark:text-n-3'>{client.detail}</p>
                      <p className='mt-2 text-base text-n-900 dark:text-white'>{client.description}</p>
                      {client.url && (
                        <a
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block rounded bg-a-dark px-4 py-2 font-extrabold text-white transition-colors duration-200 hover:bg-a dark:bg-a-dark dark:hover:bg-a"
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
    </ErrorBoundary>
  )
}

export default MapChart