import {ClassValue, clsx} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// Remove this entire block if not needed
/*
const isMobile = () => {
	if (typeof window !== 'undefined') {
		return window.innerWidth <= 768;
	}
	return false;
}
*/
