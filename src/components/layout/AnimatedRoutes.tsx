import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from '@/pages/Home'
import { About } from '@/pages/About'
import NotFound from '@/pages/404'
import PageTransition from '@/components/ui/page-transition'
import Pricing from '@/pages/Pricing'
import { Privacy } from '@/pages/Privacy'
import { Terms } from '@/pages/Terms'
import ScrollToTop from '@/hooks/ScrollToTop'

const AnimatedRoutes = () => {
	const location = useLocation()

	return (
		<>
			<ScrollToTop />
			<AnimatePresence mode="wait">
				<PageTransition key={location.pathname}>
					<Routes location={location}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<NotFound />} />
<<<<<<< Updated upstream:src/components/layout/AnimatedRoutes.tsx
						<Route path="/pricing" element={<Pricing />} />
=======
>>>>>>> Stashed changes:src/components/ui/AnimatedRoutes.tsx
						<Route path="/privacy" element={<Privacy />} />
						<Route path="/terms" element={<Terms />} />
					</Routes>
				</PageTransition>
			</AnimatePresence>
		</>
	)
}

export default AnimatedRoutes
