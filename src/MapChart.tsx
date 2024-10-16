import React, { memo, useState, useEffect } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { clients } from "./clients";

import { ImageKeys, images } from './lib/assets'

export interface Client {
  name: string;
  coordinates: [number, number];
  logo: ImageKeys; // Change this to ImageKeys
  url: string;
  description: string;
}


const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart: React.FC = () => {
  const [position, setPosition] = useState({ coordinates: [-98, 38], zoom: 1 });
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.2 }));
  }

  function handleMoveEnd(position: { coordinates: [number, number]; zoom: number }) {
    setPosition(position);
  }

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showPopup && !(event.target as HTMLElement).closest('.popup')) {
        setShowPopup(false);
        setActiveClient(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <div className="relative w-full px-12 h-auto max-w-4xl mx-auto bg-n-light dark:bg-n-dark">
      <ComposableMap projection="geoAlbersUsa" className="w-full h-full">
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as [number, number]}
          onMoveEnd={handleMoveEnd}
          disableZooming={true} 
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#D6D6DA"
                  stroke="#FFFFFF"
                  className="outline-none transition-colors duration-200 ease-in-out hover:fill-s-light focus:fill-s-light"
                />
              ))
            }
          </Geographies>
          {clients.map((client) => (
            <Marker key={client.name} coordinates={client.coordinates}>
              <motion.circle
                r={10}
                fill="#33B588"
                stroke="#fff"
                strokeWidth={2}
                className="cursor-pointer"
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setActiveClient(client);
                  setShowPopup(true);
                }}
                transition={{ duration: 0.2 }}
              />
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <motion.button
          onClick={handleZoomIn}
          className="px-3 py-1 bg-p text-n-light border border-p-3 rounded shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          +
        </motion.button>
        <motion.button
          onClick={handleZoomOut}
          className="px-3 py-1 bg-p text-n-light border border-p-3 rounded shadow hover:bg-p-light focus:outline-none focus:ring-2 focus:ring-s"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          -
        </motion.button>
      </div>
      <AnimatePresence>
        {showPopup && activeClient && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="popup absolute top-4 left-4 bg-n-light dark:bg-n-dark p-4 rounded shadow-lg max-w-xs border border-n-5 dark:border-n-8"
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-n-5 dark:text-n-3 hover:text-n-7 dark:hover:text-n-1"
            >
              ✕
            </button>
            <img 
  src={images[activeClient.logo]} // Accessing the image URL
  alt={`${activeClient.name} logo`} 
  className="w-16 h-16 object-contain mb-2" 
/>

            <h3 className="font-bold text-p-dark dark:text-s-light">{activeClient.name}</h3>
            <p className="text-sm text-n-7 dark:text-n-3">{activeClient.description}</p>
            <a href={activeClient.url} target="_blank" rel="noopener noreferrer" className="text-a hover:text-a-light dark:text-s dark:hover:text-s-light transition-colors duration-200">
              Visit Website
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default memo(MapChart);
