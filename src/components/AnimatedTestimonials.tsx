import { useState, useEffect } from 'react';
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ImageSource, { ImageKeys } from '../constants/assets2';

export function ClientTestimonials() {
	const [loadedImages, setLoadedImages] = useState<Record<ImageKeys, string>>({} as Record<ImageKeys, string>);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = Object.entries(ImageSource).map(async ([key, importFunc]) => {
        const module = await importFunc();
        return [key, module.default];
      });

      const loadedImagePairs = await Promise.all(imagePromises);
      setLoadedImages(Object.fromEntries(loadedImagePairs));
    };

    loadImages();
  }, []);

  const testimonials = [
    {
      quote:
        '"Working with Selynt has been an excellent experience! The website Alex Sojka created is clean looking, easy to navigate, and reflects my vision. Alex was responsive throughout the creation process, always accessible through phone or email. Alex welcomed my feedback with enthusiasm. I highly recommend his services to anyone looking for a professional and user-friendly website."',
      name: "Hillary H.",
      designation: "PhD Candidate",
      url: "https://hillaryrhamilton.github.io",
			src: 'hill' as ImageKeys,
    },
		{
			name: 'Deck Renew',
			designation: 'High-Quality Deck Restoration',
			src: 'deck' as ImageKeys,
			url: 'http://www.deckrenew.net',
			quote:
				"Selynt was amazing from start to finish. As a small company I didn’t even know exactly what I needed for a website and he walked me through the whole thing. He finished promptly and was especially well priced! Would recommend them to anyone!",
		},
		{
			name: "Hall of Hekate",
			designation: 'In Progress',
			src: 'hek' as ImageKeys,
			url: '',
			quote: "We're working with Hall of Hekate to develop a new, mobile-friendly website. We're working closely with the team to ensure that the website is easy to navigate, visually appealing, and has all the features they need. Stay tuned!",
		},
		{
			name: "Let's Roar",
			designation: 'Active Client',
			src: 'LR' as ImageKeys,
			url: '',
			quote: "Let's Roar is a conscious provider of unique jewelry and clothing for the modern consumer. We're working with them to customize and optimize their Shopify store, and help with their branding, sister foundation, and more.",
		},

		{
			name: 'Grell',
			designation: '',
			src: 'grell' as ImageKeys,
			url: 'https://main.dyiohhh4lioiw.amplifyapp.com',
			quote: "We worked with Grell to rebrand the company and develop a new website, resulting in annual savings of over 62% compared to their previous website arrangement. We helped implement a client capture system, and optimized online presence leading to a 30% increase in user engagement and a 20% increase in web traffic.",
		},
		{
			name: 'NEIFB',
			designation: 'The Northeast Iowa Food Bank is a nonprofit organization that provides food assistance to those in need in Northeast Iowa.',
			src: 'neifb' as ImageKeys,
			url: 'https://www.neifb.org',
			quote: 'Selynt contributed to the design, development, launch and maintenance of the NEIFB website. They also headed the company-wide implementation of the updated branding and assisted with content creation, marketing and more.',
		},
		{
			name: 'CSP',
			designation: 'In Progress',
			src: 'apo' as ImageKeys,
			url: '',
			quote: '',
		},
		{
			name: 'Coming Soon',
			designation: '',
			src: 'wh' as ImageKeys,
			url: '',
			quote: '',
		},
   
  ];

	const testimonialsWithImages = testimonials.map(testimonial => ({
    ...testimonial,
    image: loadedImages[testimonial.src] || ''
  }));

  return <AnimatedTestimonials testimonials={testimonialsWithImages} />;
}