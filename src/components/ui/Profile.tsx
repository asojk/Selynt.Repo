import { IconMailBolt, IconMessage, IconPhone } from "@tabler/icons-react"

export const Profile = () => {
    return (
        <div className="flex flex-col gap-2 lg:gap-0 max-w-lg mx-auto items-center">
            <img src='https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/Alex-3dkrvntPVk21XERMe5gTfkNp7q8uj4.JPG' alt="Alex" className="h-36 w-36 rounded-full object-cover mb-4" />
            <div className="flex flex-col gap-2 rounded-xl md:px-8">
                <p className="md:max-w-lg flex mx-auto">
                    Alex has over 10 years of experience in the tech and marketing industry, focusing on creating impactful
                    digital solutions. He is a certified React developer and a published researcher, and has degrees with honors
                    from the University of Minnesota and the University of Northern Iowa.
                </p>
                <div className="flex justify-end items-end py-1 ">
                        <a href='https://umn.edu' target='_blank' rel='noreferrer'>
                        <div className='w-6 h-6 p-[.15rem] bg-white rounded-full items-center justify-center mx-1' >
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/umn-BNmo3gXm6WOYlYfHMMGE4vY51DBDH6.webp"
                            alt="University of Minnesota"
                            className="pt-1"
                        />
                        </div>
                        </a>
                        <a href='https://uni.edu' target='_blank' rel='noreferrer'>
                        <div className='w-6 h-6 p-[.15rem] bg-white rounded-full items-center justify-center mx-1' >
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/uni-QfCtjbfg33oq4EO8bRsaTRtZ9Ek0ti.webp"
                            alt="University of Northern Iowa"
                            className="pt-[.15rem] ' >"
                        />
                        </div>
                        </a>
                        <a href='https://www.researchgate.net/profile/Alexander-Sojka' target='_blank' rel='noreferrer'>
                        <div className='w-6 h-6 p-[.15rem] bg-white rounded-full items-center justify-center mx-1' >
                        <img
                            src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ResearchGate_icon_SVG-n6JxwxaF1wMOrpGMhkIULcVZEG0Txu.svg"
                            alt="ResearchGate"
                            className=""
                        />
                        </div>
                        </a>
                        
                    </div>




                <div className="bg-n-4 dark:bg-p-dark p-3 rounded-xl mt-4 flex flex-col">
                    <div className="border-2 border-p-3 dark:border-none dark:bg-p-dark p-4 rounded-xl mb-2 bg-white ">
                        <p className='font-semibold text-n-9 dark:text-white pb-6 underline text-center'>Contact Information</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <div className='flex flex-col items-center justify-center'>
                                <p className='text-base text-n-9 dark:text-n-3 mb-2'>763.464.2656</p>
                                <p className='text-base text-n-9 dark:text-n-3 mb-3'>alex@selynt.com</p>
                            </div>
                            <div className='flex justify-center space-x-6'>
                                <a href="tel:+1-763-464-2656" className="text-a-dark dark:text-a flex flex-col items-center">
                                    <IconPhone className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Call</span>
                                </a>
                                <a href="sms:+1-763-464-2656" className="text-a-dark dark:text-a flex flex-col items-center">
                                    <IconMessage className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Text</span>
                                </a>
                                <a href="mailto:alex@selynt.com" className="text-a-dark dark:text-a flex flex-col items-center">
                                    <IconMailBolt className="inline-block w-6 h-6 my-1" />
                                    <span className="text-sm">Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="md:max-w-lg flex mx-auto space-x-4 my-8">
            <p className='font-semibold text-n-9 dark:text-white pb-6 underline text-left'>Certification</p>
                <img
                    src="https://prkm7pjvgapey0vo.public.blob.vercel-storage.com/src/assets/images/ReactCert-Q2gZzDqhBzQocwjK7yKel57FilzNKK.jpg"
                    alt="React Certification"
                    className="w-48 lg:w-64 rounded-md"
                    style={{ filter: 'sepia(0.5) brightness(0.8)' }}
                />
            </div>
        </div>
    )
}