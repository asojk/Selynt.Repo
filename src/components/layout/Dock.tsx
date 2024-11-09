import Dock from '@/components/ui/floating-dock'
import { navlinks } from '@/constants/navlinks'
import { useNavigate, useLocation } from 'react-router-dom'

export function IndexDock() {
    const links = [...navlinks]
    const navigate = useNavigate()
    const location = useLocation()

    const handleItemClick = (href: string, scroll?: boolean) => {
        if (scroll) {
            if (location.pathname !== '/') {
                navigate('/')
                setTimeout(() => {
                    scrollToContact()
                }, 100)
            } else {
                scrollToContact()
            }
        } else {
            navigate(href)
        }
    }

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            })
        }
    }

    return (
        <Dock
            items={links.map((link) => ({
                title: link.label,
                icon: <link.icon className="flex h-8 w-8 rounded-full stroke-[1.25px] p-1 lg:h-12 lg:w-12" />,
                href: link.href,
                scroll: link.scroll,
                onClick: () => handleItemClick(link.href, link.scroll)
            }))}
        />
    )
}