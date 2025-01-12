import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import ScrollToTop from '@/hooks/ScrollToTop'
import PageTransition from '@/components/ui/page-transition'
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'

const AnimatedRoutes: React.FC = () => {
	const location = useLocation()

	return (
		<>
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<PageTransition key={location.pathname}>
					<Routes location={location}>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/terms" element={<Terms />} />
					</Routes>
				</PageTransition>
			</AnimatePresence>
		</>
	)
}

export default AnimatedRoutes
