// Import Libraries
"use client";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Import Components
import CertificationTag from '../Tags/CertificationTag';
import CertificationCard from '../Cards/CertificationCard';

// Certifications Data
const certificationsData = [
    {
        id: 1,
        title: "Introduction to Programming with Python",
        description: "Endorsed by Thai Samsung Electronics Ltd.",
        imgUrl: "/images/Certifications/Certification1.jpg",
        previewUrl: "https://samsungsic-thailand.org/certificate-tutor?cert_hash=a1bc30c4e75a7099",
        tag: ["All", "Programming"]
    }
]

const MyCertificationsSection = () => {
    const ref = useRef(null);
    const [tag, setTag] = useState("All");
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filterCertifications = certificationsData.filter((proj) =>
        proj.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    }
    return (
        <section id="my-certifications">
            <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-600 mt-10 mb-1">My Certifications</h2>
            <div className="text-white flex flex-row justify-center items-center gap-3 py-6">
                <CertificationTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
                <CertificationTag onClick={handleTagChange} name="Programming" isSelected={tag === "Programming"} />
            </div>
            <ul ref={ref} className="grid md:grid-cols-2 gap-x-8 gap-y-4 md:gab-12">
                {filterCertifications.map((cert, index) => (
                    <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.4 }}>
                        <CertificationCard key={cert.id} title={cert.title} description={cert.description} imgUrl={cert.imgUrl} previewUrl={cert.previewUrl} tags={cert} />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

export default MyCertificationsSection;