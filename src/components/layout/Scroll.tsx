import Chat from '@/components/ui/Chat';
import { Greet } from '@/components/ui/greet';
import Window from "@/components/ui/Window";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

// Custom clamp function
const clamp = (min: number, max: number, value: number) => {
  return Math.max(min, Math.min(max, value));
};

function useScrollConstraints(ref: React.RefObject<HTMLDivElement>) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const element = ref.current;
    if (element) {
      const viewportHeight = element.offsetHeight;
      const contentHeight = element.firstChild instanceof HTMLElement ? element.firstChild.offsetHeight : 0;

      setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
    }
  }, [ref]);

  return constraints;
}

export const Timeline = () => {
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const { top, bottom } = useScrollConstraints(ref);

  function handleWheel(event: React.WheelEvent) {
    event.preventDefault();
    const newY = y.get() - event.deltaY;
    const clampedY = clamp(top, bottom, newY);
    y.stop();
    y.set(clampedY);
  }

  return (
    <div className="container" ref={ref} onWheel={handleWheel}>
      <motion.div
        drag="y"
        dragConstraints={{ top, bottom }}
        className="scrollable"
        style={{ y }}
      >
            <ul className='w-full max-w-5xl timeline timeline-vertical timeline-snap-icon'>
			<li>
				<div className='timeline-middle'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
				</div>
				<div className=' timeline-start mb-10 md:text-end'>
					<time className='font-mono italic'>1984</time>
					<div className='text-lg font-black'>First Macintosh computer</div>
          <Greet />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className='timeline-middle'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
				</div>
				<div className=' timeline-end mb-10 w-full'>
					<time className='font-mono italic'>1998</time>
					<div className='text-lg font-black'>iMac</div>
					<Window />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className='timeline-middle'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd' />
					</svg>
				</div>
				<div className=' timeline-start mb-10 md:text-end'>
					<time className='font-mono italic'>2001</time>
					<div className='text-lg font-black'>iPod</div>
					<Chat />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className='timeline-middle'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
				</div>
				<div className=' timeline-end mb-10 w-full'>
					<time className='font-mono italic'>2007</time>
					<div className='text-lg font-black'>iPhone</div>
					<Window />
				</div>
				<hr />
			</li>
			<li>
				<hr />
				<div className='timeline-middle'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
						<path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z' clipRule='evenodd'/>
					</svg>
				</div>
				<div className=' timeline-start mb-10 md:text-end'>
					<time className='font-mono italic'>2015</time>
					<div className='text-lg font-black'>Apple Watch</div>
					Party
				</div>
			</li>
		</ul>
      </motion.div>
    </div>
  );
};