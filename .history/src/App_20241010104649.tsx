/** @format */

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { More } from './More.tsx'
import { useTheme } from './ThemeContext'
import { DarkModeToggle } from './components/DarkModeToggle'
import { Footer } from './components/Footer'
import { FloatingDockDemo } from './components/FloatingDock'

const App: React.FC = () => {
	const { theme, setTheme } = useTheme()

	return (
		<div className={theme === 'dark' ? 'dark' : ''}>
			<Router>
				<div className="fixed right-6 top-6 z-[999]">
					<DarkModeToggle mode={theme} setMode={setTheme} />
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/more" element={<More />} />
				</Routes>
				<Footer />
				<FloatingDockDemo />
			</Router>
		</div>
	)
}

export default App
