
    import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
    import { ImageKeys } from '@/constants/assets';

		export function ClientTestimonials() {
      const testimonials = [
				{
					quote:
						'"Working with Selynt was an excellent experience! My new site is clean, easy to navigate, and truly reflects my vision. Alex was responsive throughout the process, always accessible via phone or email, and welcomed feedback enthusiastically. I highly recommend his services to anyone looking for a professional and user-friendly website."',
					name: "Hillary H.",
					designation: "PhD Candidate - Small Group & Organizational Communication",
					src: 'hill' as ImageKeys,
					url: "https://hillaryrhamilton.github.io"
				},
				{
					name: 'Deck Renew',
					designation: 'Small Business - High-Quality Deck Restoration',
					src: 'deck' as ImageKeys,
					url: 'http://www.deckrenew.net',
					quote:
						'"Selynt was amazing from start to finish. As a small business, I wasn’t sure what I needed for a website, but Alex walked me through the entire process. The final result was professional, well-priced, and delivered on time. Highly recommend!"',
				},
				{
					name: "Hall of Hekate",
					designation: 'Family Business - Upcoming Website Launch',
					src: 'hek' as ImageKeys,
					url: '',
					quote: 
						"We’re collaborating with Hall of Hekate to design a new, mobile-friendly website. Our goal is to create a seamless user experience that aligns with their brand and vision. Stay tuned for the launch!",
				},
				{
					name: "Let's Roar",
					designation: 'E-Commerce & Branding Support',
					src: 'LR' as ImageKeys,
					url: '',
					quote: 
						"Let's Roar is a conscious brand specializing in jewelry and clothing. We're working to enhance their Shopify store, refine their branding, and support their sister foundation. This project includes optimization, customization, and ongoing consulting.",
				},
				{
					name: 'Grell',
					designation: 'Rebranding & Web Development',
					src: 'grell' as ImageKeys,
					url: 'https://main.dyiohhh4lioiw.amplifyapp.com',
					quote:
						"Selynt worked with Grell for a company rebranding, website overhaul, the implementation of a client-capture system and drone videography. Grell saved over 62% on annual website costs.",
				},
      ];

      return <AnimatedTestimonials testimonials={testimonials} />;
    }