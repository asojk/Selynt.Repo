//import { StickyVComp } from "./sticky-comp-variant";
import { EnhancedForm } from '../EnhancedForm'
//import { PlaceInput } from './PlaceInput'

export const Process = () => {
	return (
		<>
			<div className="mx-auto w-full max-w-5xl items-center justify-center px-4 py-12 ">
				{/*
				<div className="py-8">
					<h2 className="H3 pb-2">Quick Question?</h2>
					<PlaceInput
						placeholders={[
							'How long does a typical website build take?',
							'Can you assist with rebranding my small business?',
							'What’s included in your website development fee?',
							'How are website updates handled without a CMS?',
							'How does Selynt’s pricing compare to agencies?',
							'What is the process for designing a custom logo?',
						]}
						onChange={(e) => {
							// Handle the change event without using setLocation
							console.log(e.target.value)
						}}
						onSubmit={(e) => {
							e.preventDefault()
							// handle form submission
						}}
					/>
				</div>
				*/}
        <div className='pb-12'>
          <h2 className="H3">Ready to Get Started?</h2>
					<div className=''>You can call, text, email, or fill out the form below.</div>
          <EnhancedForm />
        </div>
			</div>
		</>
	)
}