// Import Libraries
"use client";
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

// Import Components
import TabButton from '../Tabs/TabButton';

// Tab Data
const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul>
                <li className="font-bold mb-3">Programming Languages</li>
                <li className="list-disc pl-2 ml-10">C</li>
                <li className="list-disc pl-2 ml-10">C++</li>
                <li className="list-disc pl-2 ml-10">Python</li>
                <li className="list-disc pl-2 ml-10">Java</li>
                <li className="list-disc pl-2 ml-10">PHP</li>
                <li className="list-disc pl-2 ml-10">HTML</li>
                <li className="list-disc pl-2 ml-10">CSS</li>
                <li className="list-disc pl-2 ml-10">Javascript</li>
                <li className="list-disc pl-2 ml-10">SQL</li>

                <li className="font-bold my-3">Computer Skills</li>
                <li className="list-disc pl-2 ml-10">Networking</li>
                <li className="list-disc pl-2 ml-10">UX/UI Design</li>
                <li className="list-disc pl-2 ml-10">Embeded System</li>
                <li className="list-disc pl-2 ml-10">Microsoft Office 365</li>

                <li className="font-bold my-3">Soft Skills</li>
                <li className="list-disc pl-2 ml-10">Leadership</li>
                <li className="list-disc pl-2 ml-10">Teamwork</li>
                <li className="list-disc pl-2 ml-10">Communication</li>
                <li className="list-disc pl-2 ml-10">Design Thinking</li>
                <li className="list-disc pl-2 ml-10">Critical Thinking & Problem Solving</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li className="font-bold">July 2020 - November 2024</li>
                <li>Bachelor of Engineering (Computer Engineering and Informatics)</li>
                <li>Kasetsart University Sriracha Campus</li>
            </ul>
        )
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
            <ul>
                <li className="font-bold mb-3">June 2024 - October 2024</li>
                <li>Co-operative Education</li>
                <li>Department of Science Service (DSS)</li>

                <li className="font-bold my-3">March 2025 - Present</li>
                <li>Full Stack Developer</li>
                <li>MonoGPS Co., Ltd.</li>
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white" id="about-me">
            <div className="md:grid md:grid-cols-2 gab-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image className="mb-10" src="/images/Assets/About.png" alt="About Profile" width={400} height={400} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl text-center md:text-start font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">A highly motivated individual with strong skills in Network, Web Development, UX/UI Design and Embedded Systems. During my internship with a government agency, I developed an asset management system using React, Bootstrap, Laravel, and Oracle Database. Moreover, my experience as a student leader has honed my teamwork, problem-solving, and leadership abilities, which I bring to every project. Which mean I'm committed to continuous learning and delivering high-impact contributions to your organization.</p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" Skills "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            {" Education "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experiences")} active={tab === "experiences"}>
                            {" Experiences "}
                        </TabButton>
                    </div>
                    <hr className="h-px mt-3 bg-gray-200 border-0 dark:bg-gray-700" />
                    <div className="mt-4">
                        {tabData.find((data) => data.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;