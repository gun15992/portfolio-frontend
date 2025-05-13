// Import Libraries
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const ProfileSection = () => {
    const handleClick = (e) => {
        e.preventDefault();
        const section = document.querySelector("#contact");
        if (section) {
            const yOffset = -80;
            const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <section className="lg:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-8  place-self-center text-center sm:text-left sm:justify-self-start">
                    <div className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600">Hello, I'm</span> <br />
                        <TypeAnimation sequence={["Thittawan Wonglor", 3000, "Developer", 3000, "Thittawan Wonglor", 3000, "Network Engineer", 3000]} wrapper="span" speed={50} repeat={Infinity} />
                    </div>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">Computer Engineer <br /> Kasetsart University Sriracha Campus</p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-500 via-green-500 to-blue-500 hover:bg-slate-200 text-white font-bold">
                            <Link href="#contact" onClick={handleClick}>Contact me</Link>
                        </button>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-500 via-green-500 to-blue-500 hover:bg-slate-800 text-white mt-3 font-bold">
                            <Link className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2" href="/pdf/Resume/Resume.pdf" download>Download CV</Link>
                        </button>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                        <Image className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/Profiles/profile1.png" alt="Main Profile" width={300} height={300} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default ProfileSection;
