
import {StickyComp} from '@/components/ui/sticky-component'

export const About1 = () => {
	return (
		<div className='bg-n-9 antialiased dark:bg-n-6 lg:subpixel-antialiased'>
      <StickyComp>
          <div className='text-white relative z-20 w-full'>
              <p>
								start by highlighting your personal mission and purpose behind your business. What
								drives you to help small businesses and make a difference?
							</p>
							<p>
								continue by describing your vision for your business. What do you hope to achieve
								and how do you plan to do it?
							</p>
							<p>
								next, talk about your personal experience and qualifications. What makes you
								uniquely qualified to help small businesses?
							</p>
							<p>
								finally, share your goals for the future. What do you hope to achieve in the next
								few years and how do you plan to do it?
							</p>
							<p>
								make sure to keep your tone and language friendly and approachable, as you want to
								make it easy for small businesses to connect with you and your business.
							</p>
							<p>
								remember, the goal is to create a personal and authentic introduction that will help
								small businesses get to know you and your business better.
							</p>
							<p>
								1. Boost Credibility with a Clear Identity Welcome to Marketing without the BS 2.
								Discover: The network of businesses we trust and serve. As our map grows, it will
								serve as a trusted resource for those looking to connect with small businesses that
								share our values. (map) 3. Our Mission: We empower small businesses to thrive in a
								market dominated by larger corporations. We specialize in crafting beautiful,
								streamlined websites and polished brand identities, focusing on clarity, simplicity,
								and affordability—because we believe that standing out shouldn't mean overspending.
								(email button) BEST BITS * Boost Credibility with a Clear Identity Welcome to
								Marketing without the BS - At Selynt, we empower small businesses to thrive in a
								market dominated by larger corporations. We specialize in crafting beautiful,
								streamlined websites and polished brand identities, focusing on clarity, simplicity,
								and affordability—because we believe that standing out shouldn’t mean overspending.
								- Our mission is built on the principles of simplicity, clarity, and affordability.
								“Selynt” is a mixture of “salience” - making your business noteworthy - and “lint” -
								to refine every detail of code and language syntax. Cut the clutter and amplify what
								matters.
							</p>
          </div>
      </StickyComp >
		</div>
	)
}

export default About1

/*}
const TextParallaxContent = ({
  subheading,
  heading,
  children,
  isHero = false
}: {
  subheading: string
  heading: string
  children: ReactNode
  isHero?: boolean
}) => {
  return (
    <div
      style={{
        paddingLeft: useImgPadding,
        paddingRight: useImgPadding
      }}>
      <div className='relative h-[150vh]'>
        <StickyImage />
        {isHero ? (
          <OverlayCopyHero heading={heading} subheading={subheading} />
        ) : (
          <OverlayCopy heading={heading} subheading={subheading} />
        )}
      </div>
      {children}
    </div>
  )
}

const OverlayCopy = ({subheading, heading}: {subheading: string; heading: string}) => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'>
      <p className='mb-2 text-center text-xl md:mb-4 md:text-3xl'>{subheading}</p>
      <p className='text-center text-4xl font-bold md:text-7xl'>{heading}</p>
    </motion.div>
  )
}

const OverlayCopyHero = ({subheading, heading}: {subheading: string; heading: string}) => {
  const targetRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [250, -250])
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

  return (
    <motion.div
      style={{
        y,
        opacity
      }}
      ref={targetRef}
      className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'>
      <h1 className='text-lg font-semibold text-n-dark dark:text-n-light md:text-4xl'>
        About <span className='animate-text bg-gradient-to-r from-p via-s to-a-darker bg-clip-text text-transparent'>{heading}</span>
      </h1>
      <p className='mb-12 mt-2 pb-2 text-n-6 dark:text-n-3 md:mb-24'>{subheading}</p>
    </motion.div>
  )
}
  */
