import Confetti from '@/components/ui/confetti'
import svgIcons from '@/components/icons/index'
import { useRef } from 'react'

const Overwhelm: React.FC = () => {
	const viewportWidth = window.innerWidth
	const viewportHeight = window.innerHeight

	const confettiRef = useRef<HTMLDivElement>(null)

	const svgComponents = Object.values(svgIcons)
	return (
		<div className="" ref={confettiRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
			<Confetti svgComponents={svgComponents} manualstart={false} width={viewportWidth} height={viewportHeight} />
		</div>
	)
}

export default Overwhelm