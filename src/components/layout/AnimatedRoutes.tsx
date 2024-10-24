/** @format */

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import { About } from '@/pages/About'
import { Contact } from '@/pages/Contact'
import NotFound from '@/pages/404'
import PageTransition from '@/components/ui/page-transition'
import Pricing from '@/pages/Pricing'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<AnimatePresence mode="wait">
			<PageTransition key={location.pathname}>
				<Routes location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/pricing" element={<Pricing />} />
				</Routes>
			</PageTransition>
		</AnimatePresence>
	)
}

export default AnimatedRoutes
