
export const About = () => (
<>

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
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical w-full">
  <span className="text-sm">April 1, 2024</span>
  { /* timeline item 1*/ }
  <li>
    <div className="timeline-middle">
      <span className="bg-primary/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-primary size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end ms-2 m-3 w-full rounded-lg">
      <div className="text-base-content/90 pt-0.5 mb-3 font-medium">12 Invoices have been paid</div>
      <p className="mb-2">Invoices have been paid to the company</p>
      <button className="btn btn-sm btn-soft btn-secondary">
        <span className="icon-[tabler--file-type-pdf] text-error" />
        invoices.pdf
      </button>
    </div>
    <hr />
  </li>
  { /* /timeline item 1*/ }
  <span className="mt-2 text-sm">March 31, 2024</span>
  { /* timeline item 2*/ }
  <li>
    <div className="timeline-middle">
      <span className="bg-success/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-success size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end ms-2 m-3 w-full rounded-lg">
      <div className="text-base-content/90 pt-0.5 mb-3 font-medium">Client meeting</div>
      <p className="mb-2">Project meeting with john @10:15am</p>
      <div className="flex gap-2">
        <div className="avatar">
          <div className="size-8 rounded-full">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" aria-label="User Avatar" />
          </div>
        </div>
        <div className="text-sm">
          <p className="font-medium">Lester McCarthy (Client)</p>
          <p>CEO of ThemeSelection</p>
        </div>
      </div>
    </div>
    <hr />
  </li>
  { /* /timeline item 2*/ }
  <span className="mt-2 text-sm">March 31, 2024</span>
  { /* timeline item 3*/ }
  <li>
    <div className="timeline-middle">
      <span className="bg-info/20 flex size-4.5 items-center justify-center rounded-full">
        <span className="badge badge-info size-3 rounded-full p-0" />
      </span>
    </div>
    <div className="timeline-end ms-2 m-3 w-full rounded-lg">
      <div className="text-base-content/90 pt-0.5 mb-3 font-medium">Create a new project for client</div>
      <p className="mb-2">6 team members in a project</p>
      <div className="avatar-group pull-up -space-x-4 rtl:space-x-reverse">
        <div className="avatar">
          <div className="w-8">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" aria-label="User Avatar" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" aria-label="User Avatar" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8">
            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-4.png" aria-label="User Avatar" />
          </div>
        </div>
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-8">
            <span>+3</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </li>
  { /* /timeline item 3*/ }
</ul>

{ /* Footer */ }
<footer className="bg-primary-dark dark:bg-black text-white py-8">
  <div className="max-w-7xl mx-auto text-center">
    <p>&copy; 2024 Selynt. All rights reserved.</p>
  </div>
</footer>
</>
);
