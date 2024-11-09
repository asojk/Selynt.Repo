import HoverDevCards from './HoverDevCards'

export const Profile = () => {
  return (
    <>
<section className="relative mr-0 py-12 lg:mr-5 xl:mr-0">
  <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3 xl:gap-12">
      <div className="col-span-full lg:col-span-3">
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:items-start">
          <div className="flex flex-col items-center text-center justify-center gap-4 lg:items-start lg:text-left">
            <h6 className="Hero-p">Founder</h6>
            <h2 className="H2">Alex Sojka</h2>
          </div>

                {/* Hidden on large screens */}
                <div className="mx-auto w-full max-w-sm lg:hidden">
                  <div className="relative h-auto w-full overflow-hidden rounded-3xl border border-s-light p-6 dark:border-p">
                    <img
                      src="/src/assets/images/Alex.JPG"
                      alt="Avatar"
                      className="h-full w-full rounded-3xl object-cover"
                    />
                  </div>
                </div>

                <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="grid w-full grid-cols-1 items-stretch justify-start gap-8 md:grid-cols-2">
                      <div className="inline-flex h-full w-full flex-col items-start justify-start gap-1.5 rounded-xl border border-s-light p-4 dark:border-p">
                        <p className="Description-p">
                          Alex has over 10 years of experience in the tech and marketing industry, focusing on creating
                          impactful digital solutions. He has certifications in React, honors and degrees from UMN and UNI,
                          published research, and compassion.
                        </p>
                        <h4 className="H3"></h4>
                        <div className="w-full">
                          <div className="flex items-center justify-center">
                            <div className="flex w-full max-w-[250px] items-center justify-between">
                              <img
                                src="src/assets/images/umn.webp"
                                alt="University of Minnesota"
                                className="w-[30%] max-w-[60px] object-contain"
                              />
                              <img
                                src="src/assets/images/UNI-site-logo.png"
                                alt="University of Northern Iowa"
                                className="w-[30%] max-w-[60px] rounded-md bg-violet-800 object-contain dark:bg-transparent"
                              />
                              <img
                                src="src/assets/images/ResearchGate_icon_SVG.svg"
                                alt="ResearchGate"
                                className="w-[30%] max-w-[60px] object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex h-full w-full flex-col items-start justify-start gap-2.5 rounded-xl border border-s-light p-6 dark:border-p">
                        <h4 className="H3">Certifications</h4>
                        <img
                          src="src/assets/images/ReactCert.jpg"
                          alt="React Certification"
                          className="h-auto w-full rounded-xl border-2 border-B-4 object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Visible on all screens, aligned with other content */}
                  <div className="w-full lg:col-span-1">
                    <div className="relative h-auto w-full overflow-hidden rounded-3xl border border-s-light dark:border-p">
                      <img
                        src="/src/assets/images/Alex.JPG"
                        alt="Avatar"
                        className="h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Full-width box for "125+ Projects" */}
                <div className="mt-12 w-full">
                  <div className="rounded-xl border border-s-light p-6 dark:border-p">
                    <h4 className="H3 mb-4">Hundreds of Creative & Technical Projects</h4>
                    <HoverDevCards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}