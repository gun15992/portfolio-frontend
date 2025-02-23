// Import Libraries
"use client";
import React from 'react';
import Image from 'next/image';

const ToolIUseSection = () => {
    return (
        <section id="tools-i-use">
            <h2 className="text-4xl text-center md:text-start font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mb-4">Tools I Use</h2>
            <h3 className="text-xl text-center md:text-start font-semibold text-white mb-4">Web Development Tools</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gab-12 mt-1">
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Figma.svg" alt="Figma Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Figma</h3>
                        <p className="text-gray-400 text-sm mt-1">UX/UI Design</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/React.svg" alt="React Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">React</h3>
                        <p className="text-gray-400 text-sm mt-1">Framework</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Laravel.svg" alt="Laravel Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Laravel</h3>
                        <p className="text-gray-400 text-sm mt-1">Framework</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Bootstrap.svg" alt="Bootstrap Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Bootstrap</h3>
                        <p className="text-gray-400 text-sm mt-1">User Interface</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/TailwindCSS.svg" alt="TailwindCSS Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">TailwindCSS</h3>
                        <p className="text-gray-400 text-sm mt-1">User Interface</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/MySQL.svg" alt="MySQL Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">MySQL</h3>
                        <p className="text-gray-400 text-sm mt-1">Database</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Oracle.svg" alt="Oracle Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Oracle</h3>
                        <p className="text-gray-400 text-sm mt-1">Database</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/NodeJS.svg" alt="NodeJS Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Node.js</h3>
                        <p className="text-gray-400 text-sm mt-1">Web Server</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Nginx.svg" alt="Nginx Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Nginx</h3>
                        <p className="text-gray-400 text-sm mt-1">Web Server</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Git.svg" alt="Git Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Git</h3>
                        <p className="text-gray-400 text-sm mt-1">Version Control</p>
                    </div>
                </div>
            </div>
            <h3 className="text-xl text-center md:text-start font-semibold text-white mb-4 mt-8">Network Tools</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gab-12 mt-1">
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/GNS3.png" alt="GNS3 Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">GNS3</h3>
                        <p className="text-gray-400 text-sm mt-1">Network Emulator</p>
                    </div>
                </div>
                <div className="flex flex-row bg-[#121212] p-4 rounded-lg border-2 border-gray-500 hover:border-white lg:max-w-[800px]">
                    <Image className="rounded-lg" src="/images/Logos/Wireshark.png" alt="Wireshark Logo" width={50} height={50} />
                    <div className="ml-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-white">Wireshark</h3>
                        <p className="text-gray-400 text-sm mt-1">Network Protocol Analyzer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ToolIUseSection;