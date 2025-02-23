// Import Libraries
"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import Components
import ProjectTag from '../Tags/ProjectTag';
import ProjectCard from '../Cards/ProjectCard';

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "Inventory Management System with QR Code",
        description: "Generate by Vite and Laravel",
        imgUrl: "/images/Projects/Project1.jpg",
        gitUrl: "https://github.com/gun15992/dss-inventory.git",
        tag: ["All", "Web Development"]
    },
    {
        id: 2,
        title: "Thittawan's Portfolio",
        description: "Generate by Next.js",
        imgUrl: "/images/Projects/Project2.jpg",
        gitUrl: "https://github.com/gun15992/portfolio-website.git",
        tag: ["All", "Web Development"]
    },
]

const MyProjectsSection = () => {
    const ref = useRef(null);
    const [tag, setTag] = useState("All");
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterProjects = projectsData.filter((proj) =>
        proj.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }
    return (
        <section id="my-projects">
            <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mt-10 mb-1">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <ProjectTag onClick={handleTagChange} name="Web Development" isSelected={tag === "Web Development"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gab-12">
                {filterProjects.map((proj, index) => (
                    <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
                        <ProjectCard key={proj.id} title={proj.title} description={proj.description} imgUrl={proj.imgUrl} gitUrl={proj.gitUrl} tags={proj} />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default MyProjectsSection;