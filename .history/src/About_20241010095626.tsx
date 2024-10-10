
export const About = () => (
  <>

    { /* Navbar */}
    <header className="bg-primary p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Selynt</h1>
        <nav>
          <a href="#" className="ml-6 hover:underline">Home</a>
          <a href="#" className="ml-6 hover:underline">About Us</a>
          <a href="#" className="ml-6 hover:underline">Services</a>
          <a href="#" className="ml-6 hover:underline">Contact</a>
        </nav>
      </div>
    </header>

    { /* Hero Section */}
    <section className="bg-primary-dark text-white py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold">Crafting Powerful Brand Identities</h2>
        <p className="mt-4 text-lg">We bring creativity and precision together to help small businesses excel through clear, captivating branding.</p>
        <a href="#services" className="mt-8 inline-block bg-alternative text-white py-3 px-6 rounded-lg hover:bg-alternative-dark transition">
          Explore Our Services
        </a>
      </div>
    </section>

    { /* Services Section */}
    <section id="services" className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-primary-dark">What We Offer</h3>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primary">Branding &amp; Rebranding</h4>
            <p className="mt-2 text-neutral-dark">Comprehensive branding services tailored to make your brand stand out and thrive.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primary">High-Quality Websites</h4>
            <p className="mt-2 text-neutral-dark">Professional, sleek websites for small businesses that don&apos;t break the bank.</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h4 className="text-xl font-semibold text-primary">Consulting &amp; Strategy</h4>
            <p className="mt-2 text-neutral-dark">Get expert advice on how to position your brand for success in a competitive market.</p>
          </div>
        </div>
      </div>
    </section>

    { /* Contact Section */}
    <section className="py-16 bg-primary-light">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-primary-dark">Get in Touch</h3>
        <p className="mt-4 text-neutral-dark">Let&apos;s work together to create something amazing. Reach out to start your branding journey.</p>
        <a href="mailto:contact@selynt.com" className="mt-8 inline-block bg-alternative py-3 px-6 rounded-lg text-white hover:bg-alternative-dark transition">
          Contact Us
        </a>
      </div>
    </section>

    { /* Footer */}
    <footer className="bg-primary-dark text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 Selynt. All rights reserved.</p>
      </div>
    </footer>
  </>
);
