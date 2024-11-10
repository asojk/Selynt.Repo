import { StickyVComp } from '@/components/ui/sticky-comp-variant'
//import MintCard from '@/components/common/MintCard.jsx'
import { Button } from '@/components/common/Button'
import { Link } from 'react-router-dom'
import { TimeLine } from '@/components/ui/timeline'
import { Profile } from '@/components/common/Profile'

export const About = () => {
  return (
    <>
      <div className="relative bg-white px-content-padding antialiased dark:bg-p-dark lg:subpixel-antialiased">
        <div className="w-full text-center md:text-start">
          <h1 className="pH1 px-content-padding pb-12 pt-12 md:pt-14 lg:pt-20">About Selynt</h1>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 md:grid-cols-2">
          <StickyVComp contentHeight={true}>
            <section className="relative w-full py-8">
              <div className="prose text-center md:text-start">
                <h2 className="H2">Our Mission</h2>
                <p className="Description prose text-left">
                  At Selynt, we empower small businesses to thrive in a market dominated by larger corporations. We
                  specialize in crafting beautiful, streamlined websites and polished brand identities, focusing on
                  clarity, simplicity, and affordability—because we believe that standing out shouldn’t mean
                  overspending.
                </p>
              </div>
            </section>
          </StickyVComp>
          <StickyVComp contentHeight={true}>
            <section className="relative w-full py-8">
              <div className="prose text-center md:text-start">
                <h2 className="H2">Our Vision</h2>
                <p className="Description prose text-left">
                  Our mission is built on the principles of simplicity, clarity, and affordability. “Selynt” is a
                  mixture of “salience” - making your business noteworthy - and “lint” - to refine every detail of code
                  and language syntax. Cut the clutter and amplify what matters.
                </p>
              </div>
            </section>
          </StickyVComp>
        </div>

        <StickyVComp contentHeight={true}>
          <div className="px-content-padding py-8">
            <TimeLine />
          </div>
        </StickyVComp>

        <StickyVComp contentHeight={true}>
				<Profile />
				</StickyVComp>

        <StickyVComp contentHeight={true}>
          <section className="relative w-full px-content-padding py-8">
            <h2 className="H2">Why Us?</h2>
            <ul className="prose-ul:li prose-disc Description-p prose list-disc pl-12 text-left">
              <li className="prose-li">Marketing without the BS: Amplify what truly matters.</li>
              <li className="prose-li">Simplicity and Clarity: Convey your message effectively.</li>
              <li className="prose-li">Affordability: High-quality services that fit your budget.</li>
              <li className="prose-li">Personalized Attention: Dedicated focus and expertise.</li>
            </ul>
          </section>
        </StickyVComp>

        <StickyVComp contentHeight={true}>
          <section className="relative w-full px-content-padding py-8">
            <h2 className="H3 text-center">Ready to Boost Your Credibility?</h2>
            <p className="Description-p prose pb-2">Let’s create a compelling identity for your business.</p>
            <Link to="/contact">
              <Button text="Get Started" />
            </Link>
          </section>
        </StickyVComp>
      </div>
    </>
  )
}

export default About;
