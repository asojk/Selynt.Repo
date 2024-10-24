import React from 'react'

const UnderConstructionBanner: React.FC = () => {
	return (
		<div className="relative top-0 left-0 z-50 w-full p-2 text-center text-white bg-yellow-500">
			<div className="flex items-center justify-center space-x-2">
				<span className="font-bold">🚧 Under Construction 🚧</span>
				<span>We’re working hard to improve your experience. Stay tuned!</span>
			</div>
		</div>
	)
}

export default UnderConstructionBanner
