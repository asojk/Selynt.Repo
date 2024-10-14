
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import {useTheme} from './ThemeContext'
import {DarkModeToggle} from './components/DarkModeToggle'
import {Footer} from './components/Footer'




const App: React.FC = () => {
	const {theme, setTheme} = useTheme()

	return (
		<div className={theme === 'dark' ? 'dark' : ''}>
			<Router>
				<div className='fixed right-6 top-6 z-[999]'>
					<DarkModeToggle mode={theme} setMode={setTheme} />
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
