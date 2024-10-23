import Code from './Code'
import {Greet} from './greet'
import Phone from './Phone'
import Window from './Window'
import React from 'react';

export default function Timeline() {
  return (
    <ul className="w-full max-w-5xl timeline timeline-vertical">
      <li>
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-start mb-10 md:text-end'>
          <time className='font-mono text-xl italic'>Step 1</time>
          <div className='mb-4 text-2xl font-black'>
            Meet <a className='pb-4 text-xs font-thin italic'>virtual, or not!</a>{' '}
          </div>
          <Greet />
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-end mb-10 w-full text-left'>
          <time className='font-mono text-xl italic'>Step 2</time>
          <div className='mb-4 text-2xl font-black'>Get to Work</div>
          <Window />
        </div>
        <hr />
      </li>




      <li className="justify-end space-x-16">
        <div className="timeline-end">
          <div className="avatar">
            <div className="w-12 rounded-full mt-24">
              <img
                alt="Selynt Avatar"
                src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/Alex-3dkrvntPVk21XERMe5gTfkNp7q8uj4.JPG"
              />
            </div>
          </div>
        </div>


        <div className="timeline-end mb-10 w-full">
          <div className="chat chat-start">
            <div className="chat-header text-n-5 pl-2 pb-1">
              Selynt
              <time className="text-xs opacity-[0.7] ml-1 md:ml-2">12:12</time>
            </div>
            <div className="chat-bubble text-left max-w-full md:max-w-[90%] text-n-5">
              First draft is up! <a className="italic underline hidden md:block text-blue-600">www.you.com</a>
              <br className="line-break-small" />
              Let me know what you think!
            </div>
            <div className="chat-footer opacity-50 pl-2 pt-1 text-n-5 text-xs">Delivered</div>
          </div>
        </div>
        <div className="timeline-end mb-10 w-2/5"></div>
      </li>



<li className="justify-end space-x-16">
  <div className="timeline-middle">
    <div className="avatar">
      <div className="w-12 rounded-full mt-24">
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
        <time className="text-xs opacity-[0.7] ml-1 md:ml-2">2:12</time>
      </div>
      <div className="chat-bubble max-w-full md:max-w-[90%] text-n-5">
        I like it! I'll send it to my boss.
      </div>
      <div className="chat-footer text-xs opacity-50 text-n-5">Seen at 2:12</div>
    </div>
  </div>
</li>

<li className="justify-end space-x-16">
  <div className="timeline-middle">
    <div className="avatar">
      <div className="w-12 rounded-full mt-24">
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
        <time className="text-xs opacity-[0.7] ml-1 md:ml-2">2:45</time>
      </div>
      <div className="chat-bubble pl-1 max-w-full md:max-w-[90%] text-n-5">
        Can we add a section for "Our Clients"?
      </div>
      <div className="chat-footer text-xs opacity-50 text-n-5">Seen at 2:47</div>
    </div>
  </div>
</li>






      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-end mb-10 w-full'>
          <Code />
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className='timeline-middle'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='h-5 w-5'>
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
              clipRule='evenodd'
            />
          </svg>
        </div>
        <div className='timeline-start mb-10 md:text-end'>
          <div className='h-48 origin-top-right scale-50'>
            <Phone />
          </div>
        </div>
      </li>
    </ul>
  );
}