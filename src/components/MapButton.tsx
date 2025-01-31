import MapChart from '@/components/MapChart'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { CloseIcon2 } from '@/components/ui/close-icon'

const onclose = () => {
	const modal = document.getElementById('my_modal_5') as HTMLDialogElement
	modal?.close()
}

const MapButton = () => {
	return (
		<>

<div className="h-16 grid place-content-center relative">
<div className="flex items-center text-white">
					{/* Open the modal using document.getElementById('ID').showModal() method */}

					<Button onClick={() => (document.getElementById('my_modal_5') as HTMLDialogElement)?.showModal()}>
						Our Work,
						<br />
						Our People
					</Button>
				</div>

				<dialog id='my_modal_5' className='modal modal-bottom sm:modal-middle'>
					<div className='modal-box'>
						<h3 className='text-lg font-bold'>Hello!</h3>
						<MapChart setActiveClient={() => {}} setShowPopup={() => {}} />
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='fixed bottom-4 right-4 rounded-2xl px-3 py-2 text-white'
							onClick={onclose}>
							<span className='inline-flex items-center'>
								<CloseIcon2 />
								<span className='hidden md:ml-2 md:inline'>Close</span>
							</span>
						</motion.button>
					</div>
				</dialog>
			</div>
		</>
	)
}

export default MapButton
