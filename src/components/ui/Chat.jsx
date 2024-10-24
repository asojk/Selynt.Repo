
export function Chat() {
  return (
    <>
		<div className='p-2 shadow-lg rounded-xl bg-p'>
    <div className="chat chat-start">
    <div className='avatar chat-image'>
      <div className='w-6 rounded-full md:w-10 lg:w-12'>
						<img
							alt='Selynt Avatar'
							src='https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/Alex-3dkrvntPVk21XERMe5gTfkNp7q8uj4.JPG'
						/>
					</div>
      </div>
      <div className='chat-header text-n-6'>
					Selynt
					<time className='text-xs opacity-[0.7] ml-1 md:ml-2'>12:12</time>
				</div>
				<div className='chat-bubble bg-p-dark max-w-full md:max-w-[90%] text-n-3 text-left'>First draft is up! <a className='hidden italic text-blue-600 underline md:block'>www.you.com</a>
        Let me know what you think!</div>
				<div className='text-xs chat-footer opacity-65 text-n-6'>Delivered</div>
			</div>

    <div className="chat chat-end">
        <div className="chat-image avatar">
        <div className='w-6 rounded-full md:w-10 lg:w-12'>
						<img
							alt='Customer avatar'
							src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
						/>
					</div>
        </div>
				<div className='chat-header text-n-6'>
        Obi-Wan
					<time className='text-xs opacity-[0.7] ml-1 md:ml-2'>2:12</time>
				</div>
				<div className='text-right bg-p-dark chat-bubble max-w-full md:max-w-[90%] text-n-3'>
          I like it! I'll send it to my boss.
        </div>
				<div className='text-xs chat-footer opacity-65 text-n-6'>Seen at 2:12</div>
		</div>

      <div className="chat chat-end">
        <div className="chat-image avatar">
        <div className='w-6 rounded-full md:w-10 lg:w-12'>
						<img
							alt='Customer avatar'
							src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
						/>
					</div>
        </div>
				<div className='chat-header text-n-6'>
        Obi-Wan
					<time className='text-xs opacity-[0.7] ml-1 md:ml-2'>2:45</time>
				</div>
				<div className='chat-bubble bg-p-dark max-w-full md:max-w-[90%] text-n-3 text-right'>Can we add a section for "Our Clients"?
        </div>
				<div className='text-xs chat-footer opacity-65 text-n-6'>Seen at 2:47</div>
			</div>
			</div>
      </>
  )
}