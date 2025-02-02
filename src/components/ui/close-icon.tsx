import { motion } from "motion/react"

const CloseIcon1 = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: 0.7,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-[10vmin] right-[10vmin] h-10 w-10 rounded-full text-white bg-p-3 shadow-sm shadow-black/60 px-2 py-2 z-[1000]">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    )
}

const CloseIcon2 = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className=" h-10 w-10 rounded-full text-white bg-p-3 shadow-sm shadow-black/60 px-2 py-2 ">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
        </svg>
    )
}

interface CloseButtonProps {
    onClick: () => void
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='fixed bottom-4 right-4 px-3 py-2 text-a z-[120]'
            onClick={onClick}
        >
            <span className='inline-flex items-center'>
                <CloseIcon2 />
                <span className='hidden md:ml-2 md:inline'>Close</span>
            </span>
        </motion.button>
    )
}

export { CloseIcon1, CloseIcon2, CloseButton }