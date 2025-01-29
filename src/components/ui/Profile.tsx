import { IconMailBolt, IconMessage, IconPhone } from "@tabler/icons-react"

export const Profile = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-0 max-w-lg mx-auto items-center">
					<img src='/Self.jpeg' alt="Alex" className="h-36 w-36 rounded-full object-cover mb-4" />
            <div className="flex flex-col gap-2 rounded-xl md:px-8">
                <p className="md:max-w-lg flex mx-auto">
                    Alex has over 10 years of experience in the tech and marketing industry, focusing on creating impactful
                    digital solutions. He is a certified React developer and a published researcher, and has degrees with honors
                    from the University of Minnesota and the University of Northern Iowa.
                </p>

                <div className="bg-p-1 p-3 rounded-xl mt-4 flex flex-col">
                    <div className="bg-n-1 p-4 rounded-xl mb-2">
                        <p className='font-semibold text-n-9 pb-3 text-center'>Contact Information</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-base text-n-9 mb-2'>763.464.2656</p>
                                <p className='text-base text-n-9 mb-3'>alex@selynt.com</p>
                            </div>
                            <div className='flex justify-center space-x-6'>
                                <a href="tel:+1-763-464-2656" className="text-a-dark flex flex-col items-center">
                                    <IconPhone className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Call</span>
                                </a>
                                <a href="sms:+1-763-464-2656" className="text-a-dark flex flex-col items-center">
                                    <IconMessage className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Text</span>
                                </a>
                                <a href="mailto:alex@selynt.com" className="text-a-dark flex flex-col items-center">
                                    <IconMailBolt className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 place-items-end py-1">
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/umn-BNmo3gXm6WOYlYfHMMGE4vY51DBDH6.webp"
                            alt="University of Minnesota"
                            className="w-[20%] max-w-[60px] md:-mr-12"
                        />
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/uni-QfCtjbfg33oq4EO8bRsaTRtZ9Ek0ti.webp"
                            alt="University of Northern Iowa"
                            className="w-[20%] max-w-[60px] rounded-md bg-violet-800 mx-auto md:-pl-12 dark:bg-transparent"
                        />
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ResearchGate_icon_SVG-n6JxwxaF1wMOrpGMhkIULcVZEG0Txu.svg"
                            alt="ResearchGate"
                            className="w-[20%] max-w-[60px] object-contain"
                        />
                    </div>
                </div>
            </div>
            <div className=" p-4 ">
                <img
                    src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ReactCert-Q2gZzDqhBzQocwjK7yKel57FilzNKK.jpg"
                    alt="React Certification"
                    className="w-48 lg:w-64 rounded-xl "
                />
            </div>
        </div>
    )
}