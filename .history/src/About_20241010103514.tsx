
export const About = () => (
<>

<div className="min-h-screen bg-black relative flex flex-col justify-end items-center">
  { /* Floating Orb */ }
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
    <div className="w-96 h-96 bg-yellow-500 rounded-full filter blur-3xl opacity-80 animate-float" />
  </div>

  { /* Text at the Bottom */ }
  <div className="text-center mb-8">
    <h1 className="text-4xl font-semibold text-white">Types for Tailwind-CSS config</h1>
    <p className="text-gray-300 mt-2">How to use Typescript types for Tailwind-CSS</p>
  </div>
</div>

{ /* Hero Section */ }
<section className="bg-primary-dark dark:bg-black text-white py-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-semibold">Crafting Powerful Brand Identities</h2>
    <p className="mt-4 text-lg prose prose-invert">We bring creativity and precision together to help small businesses excel through clear, captivating branding.</p>
    <a href="#services" className="mt-8 inline-block bg-alternative dark:bg-alternative-dark text-white py-3 px-6 rounded-lg hover:bg-alternative-dark dark:hover:bg-alternative-light transition">
      Explore Our Services
    </a>
  </div>
</section>

{ /* Services Section */ }
<section id="services" className="py-16 bg-neutral-light dark:bg-neutral-dark">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-primary-dark dark:text-white">What We Offer</h3>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-primary-light p-6 shadow-lg rounded-lg">
        <h4 className="text-xl font-semibold text-primary">Branding &amp; Rebranding</h4>
        <p className="mt-2 text-neutral-dark dark:text-neutral-light prose">Comprehensive branding services tailored to make your brand stand out and thrive.</p>
      </div>
      <div className="bg-white dark:bg-primary-light p-6 shadow-lg rounded-lg">
        <h4 className="text-xl font-semibold text-primary">High-Quality Websites</h4>
        <p className="mt-2 text-neutral-dark dark:text-neutral-light prose">Professional, sleek websites for small businesses that don&apos;t break the bank.</p>
      </div>
      <div className="bg-white dark:bg-primary-light p-6 shadow-lg rounded-lg">
        <h4 className="text-xl font-semibold text-primary">Consulting &amp; Strategy</h4>
        <p className="mt-2 text-neutral-dark dark:text-neutral-light prose">Get expert advice on how to position your brand for success in a competitive market.</p>
      </div>
    </div>
  </div>
</section>

{ /* Contact Section */ }
<section className="py-16 bg-primary-light dark:bg-primary-dark">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-3xl font-bold text-primary-dark dark:text-white">Get in Touch</h3>
    <p className="mt-4 text-neutral-dark dark:text-neutral-light prose">Let&apos;s work together to create something amazing. Reach out to start your branding journey.</p>
    <a href="mailto:contact@selynt.com" className="mt-8 inline-block bg-alternative py-3 px-6 rounded-lg text-white hover:bg-alternative-dark dark:hover:bg-alternative-light transition">
      Contact Us
    </a>
  </div>
</section>

{ /* Footer */ }
<footer className="bg-primary-dark dark:bg-black text-white py-8">
  <div className="max-w-7xl mx-auto text-center">
    <p>&copy; 2024 Selynt. All rights reserved.</p>
  </div>
</footer>
</>
);