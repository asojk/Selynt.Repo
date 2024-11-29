// src/components/Modal.tsx
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import FormZ from '@/components/ui/formz'
import { AltContact } from './common/AltContactButtons'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-[99999]" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black bg-opacity-35 backdrop-blur-lg" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-2 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95">
							<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-p-5">
								<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-n-900 dark:text-white">
									Reach Out Anytime
									<span className="sr-only">Close</span>
									<button
										className="absolute right-4 top-4 text-n-900 hover:text-gray-600 dark:text-white"
										onClick={onClose}>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={1.5}
											strokeLinecap="round"
											strokeLinejoin="round"
											className="">
											<path stroke="none" d="M0 0h24v24H0z" fill="none" />
											<path d="M18 6l-12 12" />
											<path d="M6 6l12 12" />
										</svg>
									</button>
								</Dialog.Title>
								<Dialog.Description>
									<AltContact />
								</Dialog.Description>
								<div className="mt-2">
									<FormZ />
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	)
}

export default Modal
