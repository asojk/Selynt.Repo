import { Link } from "react-router-dom"

export const Footer = () => {
    const footerNavs = [
        {
            link: '/terms',
            name: 'Terms'
        },
        {
            link: '/privacy',
            name: 'Privacy'
        },
    ]
    return (
        <footer className="mt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-n-3 md:px-12">
                <div className="mt-10 py-2 border-t flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col md:flex-row md:items-center mb-4 md:mb-0">
                        <p className="text-sm text-n-3 mb-2 md:mb-0 md:mr-4">
                            &copy; {new Date().getFullYear()}
                            <span className="italic text-s"> Selynt </span>
                            All rights reserved.
                        </p>
                        <a href="mailto:contact@selynt.com" className="text-sm underline hover:text-a md:mr-4">
                            contact@selynt.com
                        </a>
                        <ul className="flex flex-wrap items-center gap-4 text-sm mt-2 md:mt-0">
                            {footerNavs.map((item, idx) => (
                                <li key={idx} className="text-n-3 hover:text-s duration-150">
                                    <Link to={item.link}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}