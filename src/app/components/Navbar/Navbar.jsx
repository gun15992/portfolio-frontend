// Import Libraries
"use client";
import Link from 'next/link';
import React, { useState } from 'react';

// Import Components
import NavLink from './NavLink';
import MenuOverlay from '../Menu/MenuOverlay';

// Import Icons
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

// NavLinks
const NavLinks = [
    {
        title: "About Me",
        path: "#about-me"
    },
    {
        title: "Tools I Use",
        path: "#tools-i-use"
    },
    {
        title: "My Projects",
        path: "#my-projects"
    },
    {
        title: "My Certifications",
        path: "#my-certifications"
    },
    {
        title: "Contact",
        path: "#contact"
    }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
            <div className="container flex flex-wrap items-center justify-between mx-auto px-10 py-4 lg:py-4">
                <Link className="text-xl md:text-2xl text-white font-semibold" href={"/"}>Thittawan's <span className="text-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600">Portfolio</span></Link>
                <div className="mobile-menu block lg:hidden">
                    {!isOpen ? (
                        <button className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white" onClick={() => setIsOpen(true)}>
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-white hover:border-white" onClick={() => setIsOpen(false)}>
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="menu hidden lg:block lg:w-auto" id="navbar">
                    <ul className="flex p-4 lg:p-0 lg:flex-row lg:space-x-8 mt-0">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} onClick={handleLinkClick} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen ? <MenuOverlay links={NavLinks} onClick={handleLinkClick} /> : null}
        </nav>
    );
}

export default Navbar;