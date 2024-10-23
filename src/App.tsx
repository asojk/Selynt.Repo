import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from '@/constants/ThemeContext';
import { DarkModeToggle } from '@/components/common/DarkModeToggle';
import { Footer } from '@/components/layout/Footer';
import { IndexDock } from '@/components/layout/Dock';
import AnimatedRoutes from '@/components/layout/AnimatedRoutes'

const App = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Router>
      <div className={theme === 'dark' ? 'dark' : ''}>
        <div className='fixed right-6 top-6 z-[999]'>
          <DarkModeToggle mode={theme} setMode={setTheme} />
        </div>
        <AnimatedRoutes />
        <IndexDock />
        <Footer />
      </div>
    </Router>
  );
};

export default App;