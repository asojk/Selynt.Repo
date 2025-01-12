import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { DarkModeToggle } from './components/ui/toggles'
import { useTheme } from './constants/theme-context'
import { Footer } from './components/ui/Footer'
import AnimatedRoutes from '@/components/ui/AnimatedRoutes'
//import { BgAnimation } from './components/ui/bg-animation'

const App: React.FC = () => {
	const { theme } = useTheme()

	return (
		<div className='overflow-hidden'>
			<div className={`${theme} w-full overflow-hidden bg-white px-4 dark:bg-p-dark`}>
				<div className="fixed right-6 top-6 z-[999] overflow-x-hidden">
					<DarkModeToggle />
				</div>
		<Router>

				<AnimatedRoutes />
				<Footer />


		</Router>
		</div>
		</div>

	)
}

export default App
