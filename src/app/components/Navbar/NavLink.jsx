// Import Libraries
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavLink = ({ href, title, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
        if (onClick) {
            onClick();
        }
    };

    return (
        <motion.div>
            <Link className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-md rounded md:p-0 hover:text-white cursor-pointer" href={href} onClick={handleClick}>
                {title}
            </Link>
        </motion.div>
    );
}

export default NavLink;