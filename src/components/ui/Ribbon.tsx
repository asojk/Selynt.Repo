/** @format */

import { IconAlertTriangle } from '@tabler/icons-react'
import { motion } from 'framer-motion'

const Ribbon = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-amber-200/80 py-1 text-n-9">
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="flex whitespace-nowrap"
      >
        <ConstructionNotice />
        <ConstructionNotice />
      </motion.div>
    </div>
  )
}

const ConstructionNotice = () => (
  <div className="flex items-center px-4">
    <IconAlertTriangle size="1.5rem" stroke="1.5" className="mr-2" />
    <span className="text-sm font-medium">
      Site Under Construction - We're working on improving your experience!
    </span>
  </div>
)
/*
const TranslateWrapper = ({ children, reverse }: { children: JSX.Element; reverse?: boolean }) => {
	return (
		<motion.div
			initial={{ translateX: reverse ? '-100%' : '0%' }}
			animate={{ translateX: reverse ? '0%' : '-100%' }}
			transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
			className="flex px-2">
			{children}
		</motion.div>
	)
}

const LogoItem = ({ name }: { name: string }) => {
	return (
		<a className="flex items-center justify-center gap-4 border-y-4 border-dashed border-n-900 px-4 py-4 text-black md:py-6">
			<IconAlertTriangle size="3rem" stroke="1px" className="relative right-2" />
			<span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">{name}</span>
		</a>
	)
}

const LogoItemsTop = () => (
	<>
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
	</>
)

const LogoItemsBottom = () => (
	<>
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
		<LogoItem name="Not for those who want the status quo" />
	</>
)
*/
export default Ribbon
