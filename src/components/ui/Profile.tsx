export const Profile = () => {
	return (
		<div className="flex flex-col gap-2 lg:gap-0 lg:max-w-xl mx-auto items-center">
			<div className="flex flex-col gap-2 rounded-xl p-4 lg:p-0">
				<p className="text-sm md:max-w-lg flex mx-auto">
					Alex has over 10 years of experience in the tech and marketing industry, focusing on creating impactful
					digital solutions. He is a certified React developer and a published researcher, and has degrees with honors
					from the University of Minnesota and the University of Northern Iowa.
				</p>
				<div className="mt-2 flex justify-center lg:justify-end lg:mt-4">
					<div className="flex w-2/3 max-w-[200px] items-center justify-between ">
						<img
							src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/umn-BNmo3gXm6WOYlYfHMMGE4vY51DBDH6.webp"
							alt="University of Minnesota"
							className="w-[20%] max-w-[60px] object-contain"
						/>
						<img
							src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/uni-QfCtjbfg33oq4EO8bRsaTRtZ9Ek0ti.webp"
							alt="University of Northern Iowa"
							className="w-[20%] max-w-[60px] rounded-md bg-violet-800 object-contain dark:bg-transparent"
						/>
						<img
							src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ResearchGate_icon_SVG-n6JxwxaF1wMOrpGMhkIULcVZEG0Txu.svg"
							alt="ResearchGate"
							className="w-[20%] max-w-[60px] object-contain"
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-row place-content-center lg:place-content-start gap-6 rounded-xl p-4 lg:-mt-12 ">
				<h4 className="mb-0 lg:mb-2 font-semibold">Certifications</h4>
				<img
					src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ReactCert-Q2gZzDqhBzQocwjK7yKel57FilzNKK.jpg"
					alt="React Certification"
					className="w-32 rounded-xl object-contain lg:w-1/4"
				/>
			</div>
		</div>
	)
}
