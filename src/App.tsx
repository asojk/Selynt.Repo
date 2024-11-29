import { BrowserRouter as Router } from 'react-router-dom'
import { useTheme } from '@/constants/ThemeContext'
import { DarkModeToggle } from '@/components/common/Toggles'
import { Footer } from '@/components/layout/Footer'
import AnimatedRoutes from '@/components/layout/AnimatedRoutes'
//import { NavTop } from './components/NavTop'
import { CornerNav } from './components/layout/CornerNav'

const App = () => {
	const { theme, setTheme } = useTheme()

	return (
		<Router>
			<div className={theme === 'dark' ? 'dark' : ''}>
				<div className="fixed right-6 top-6 z-[999]">
					<DarkModeToggle mode={theme} setMode={setTheme} />
				</div>
				<AnimatedRoutes />
				<CornerNav />

				<Footer />
			</div>
		</Router>
	)
}

export default App
