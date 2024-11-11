import HoverDevCards from './HoverDevCards'

export const Profile = () => {
	return (
		<>
			<section className="relative py-12 mr-0 lg:mr-5 xl:mr-0">
				<div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="grid items-start justify-start w-full grid-cols-1 gap-8 lg:grid-cols-3 xl:gap-12">
						<div className="col-span-full lg:col-span-3">
							<div className="flex flex-col items-center justify-center w-full gap-4 lg:items-start">
								<div className="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left">
									<h6 className="Hero-p">Founder</h6>
									<h2 className="H2">Alex Sojka</h2>
								</div>

								{/* Hidden on large screens */}
								<div className="block w-full max-w-sm mx-auto lg:hidden">
									<div className="relative w-full h-auto p-6 overflow-hidden border rounded-3xl border-s-light dark:border-p">
										<img
											src="/src/assets/images/Alex.JPG"
											alt="Avatar"
											className="object-cover w-full h-full rounded-3xl"
										/>
									</div>
								</div>

								<div className="grid items-start justify-start w-full grid-cols-1 gap-8 lg:grid-cols-3">
									<div className="lg:col-span-2">
										<div className="grid items-stretch justify-start w-full grid-cols-1 gap-8 md:grid-cols-2">
											<GridCard>
												<p className="Description-p">
													Alex has over 10 years of experience in the tech and marketing industry, focusing on creating
													impactful digital solutions. He has certifications in React, honors and degrees from UMN and
													UNI, published research, and compassion.
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
											</GridCard>
											<GridCard>
												<h4 className="H3">Certifications</h4>
												<img
													src="src/assets/images/ReactCert.jpg"
													alt="React Certification"
													className="object-contain w-full h-auto border-2 rounded-xl border-B-4"
												/>
											</GridCard>
										</div>
									</div>
									<div className="hidden w-full lg:col-span-1 lg:block">
										<GridCard>
											<div className="hidden w-full lg:col-span-1 lg:block">
												<div className="relative w-full h-auto overflow-hidden border rounded-3xl border-s-light dark:border-p">
													<img
														src="/src/assets/images/Alex.JPG"
														alt="Avatar"
														className="object-cover w-full h-full rounded-3xl"
													/>
												</div>
											</div>
										</GridCard>
									</div>
								</div>

								{/* Full-width box for "125+ Projects" */}
								<div className="w-full mt-12">
									<div className="p-6 border rounded-xl border-s-light dark:border-p">
										<h4 className="mb-4 H3">Hundreds of Creative & Technical Projects</h4>
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

import React from 'react'

const GridCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="inline-flex h-full w-full flex-col items-start justify-start gap-1.5 rounded-xl border border-s-light p-4 dark:border-p">
			{children}
		</div>
	)
}
