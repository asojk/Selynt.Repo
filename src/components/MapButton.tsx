import MapChart from '@/components/MapChart'
import { motion } from 'motion/react'
import { CloseIcon2 } from '@/components/ui/close-icon'
import { IconMapBolt } from '@tabler/icons-react'

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

					<button className='mx-auto flex h-12 items-center justify-center rounded-lg px-8 text-base font-black text-white transition duration-200 md:text-lg bg-red hover:bg-red/90'
					onClick={() => (document.getElementById('my_modal_5') as HTMLDialogElement)?.showModal()}><a className='mr-2'>Our Work</a> <IconMapBolt />
					</button>
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
