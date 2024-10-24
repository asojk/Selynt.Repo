/** @format */

import Code from './Code'
import { Greet } from './greet'
import Phone from './Phone'
import Window from './Window'

export default function Timeline() {
	return (
		<ul className="timeline timeline-vertical w-full max-w-5xl">
			<li>
				<div className="timeline-middle">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<time className="font-mono text-xl italic">Step 1</time>
					<div className="mb-4 text-2xl font-black">
						Meet <a className="pb-4 text-xs font-thin italic">virtual, or not!</a>{' '}
					</div>
					<Greet />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end mb-10 w-full text-left">
					<time className="font-mono text-xl italic">Step 2</time>
					<div className="mb-4 text-2xl font-black">Get to Work</div>
					<Window />
				</div>
				<hr />
			</li>

			<li className="justify-end space-x-16">
				<div className="timeline-end">
					<div className="avatar">
						<div className="mt-24 w-12 rounded-full">
							<img
								alt="Selynt Avatar"
								src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/Alex-3dkrvntPVk21XERMe5gTfkNp7q8uj4.JPG"
							/>
						</div>
					</div>
				</div>

				<div className="timeline-end mb-10 w-full">
					<div className="chat chat-start">
						<div className="chat-header pb-1 pl-2 text-n-5">
							Selynt
							<time className="ml-1 text-xs opacity-[0.7] md:ml-2">12:12</time>
						</div>
						<div className="chat-bubble max-w-full text-left text-n-5 md:max-w-[90%]">
							First draft is up! <a className="hidden italic text-blue-600 underline md:block">www.you.com</a>
							<br className="line-break-small" />
							Let me know what you think!
						</div>
						<div className="chat-footer pl-2 pt-1 text-xs text-n-5 opacity-50">Delivered</div>
					</div>
				</div>
				<div className="timeline-end mb-10 w-2/5"></div>
			</li>

			<li className="justify-end space-x-16">
				<div className="timeline-middle">
					<div className="avatar">
						<div className="mt-24 w-12 rounded-full">
							<img
								alt="Customer avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
				</div>

				<div className="timeline-start mb-10 w-full">
					<div className="chat chat-end">
						<div className="chat-header text-n-5">
							Obi-Wan
							<time className="ml-1 text-xs opacity-[0.7] md:ml-2">2:12</time>
						</div>
						<div className="chat-bubble max-w-full text-n-5 md:max-w-[90%]">I like it! I'll send it to my boss.</div>
						<div className="chat-footer text-xs text-n-5 opacity-50">Seen at 2:12</div>
					</div>
				</div>
			</li>

			<li className="justify-end space-x-16">
				<div className="timeline-middle">
					<div className="avatar">
						<div className="mt-24 w-12 rounded-full">
							<img
								alt="Customer avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</div>
				</div>

				<div className="timeline-start mb-10 w-full">
					<div className="chat chat-end">
						<div className="chat-header text-n-5">
							Obi-Wan
							<time className="ml-1 text-xs opacity-[0.7] md:ml-2">2:45</time>
						</div>
						<div className="chat-bubble max-w-full pl-1 text-n-5 md:max-w-[90%]">
							Can we add a section for "Our Clients"?
						</div>
						<div className="chat-footer text-xs text-n-5 opacity-50">Seen at 2:47</div>
					</div>
				</div>
			</li>

			<li>
				<hr />
				<div className="timeline-middle">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-end mb-10 w-full">
					<Code />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className="timeline-middle">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="timeline-start mb-10 md:text-end">
					<div className="h-48 origin-top-right scale-50">
						<Phone />
					</div>
				</div>
			</li>
		</ul>
	)
}
