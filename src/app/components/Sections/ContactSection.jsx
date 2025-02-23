// Import Libraries
"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import Icons
import GitHubIcon from '../../../../public/images/Logos/GitHub.svg';
import LinkedInIcon from '../../../../public/images/Logos/LinkedIn.svg';
import FacebookIcon from '../../../../public/images/Logos/Facebook.svg';
import InstagramIcon from '../../../../public/images/Logos/Instagram.svg';

const ContactSection = () => {
    return (
        <section className="w-full my-12 py-24 relative text-center md:text-start" id="contact">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full h-80 w-80 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mb-4">
                    Contact
                </h2>
                <h5 className="text-xl font-bold text-white my-2">Thittawan Wonglor (Gun)</h5>
                <p className="text-[#ADB7BE] mb-4">73(2834) Soi Seansuk, Prachasongkhro Rd. Din Daeng Sub-district, Din Daeng District, Bangkok. 10400</p>
                <p className="text-[#ADB7BE] mb-4">Tel. (+66) 96-3045365</p>
                <p className="text-[#ADB7BE] mb-4">thittawan.wo@gmail.com</p>
                <div className="socials flex flex-row gap-3 items-center justify-center md:justify-start mt-8 pt-3">
                    <Link href="https://www.facebook.com/Thittawan.GTW" target="_blank">
                        <Image className="w-9" src={FacebookIcon} alt="Facebook Icon" />
                    </Link>
                    <Link href="https://www.instagram.com/gun_gtw" target="_blank">
                        <Image className="w-8" src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                    <Link href="https://www.github.com/gun15992" target="_blank">
                        <Image className="w-8" src={GitHubIcon} alt="GitHub Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/thittawan-wonglor" target="_blank">
                        <Image className="w-12" src={LinkedInIcon} alt="LinkedIn Icon" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;