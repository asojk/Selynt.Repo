import { useState, useCallback } from "react"
import { useGesture } from "@use-gesture/react"

interface Position {
  coordinates: [number, number]
  zoom: number
}

export const useMapInteractions = (initialPosition: Position) => {
  const [position, setPosition] = useState<Position>(initialPosition)

  const handleMoveEnd = useCallback((newPosition: Position) => {
    const [longitude, latitude] = newPosition.coordinates
    const newLongitude = Math.min(Math.max(longitude, -180), 180)
    const newLatitude = Math.min(Math.max(latitude, -90), 90)
    const newZoom = Math.max(1, Math.min(4, newPosition.zoom))

    setPosition({
      coordinates: [newLongitude, newLatitude],
      zoom: newZoom,
    })
  }, [])

  const handleZoomIn = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.min(pos.zoom * 1.2, 4) }))
  }, [])

  const handleZoomOut = useCallback(() => {
    setPosition((pos) => ({ ...pos, zoom: Math.max(pos.zoom / 1.2, 1) }))
  }, [])

  const bindGestures = useGesture(
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
      eventOptions: { passive: false },
    },
  )

  return {
    position,
    handleMoveEnd,
    handleZoomIn,
    handleZoomOut,
    bindGestures,
  }
}

