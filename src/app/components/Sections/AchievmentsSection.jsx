// Impoer Libraries
"use client";
import React from 'react';
import AnimatedNumber from 'animated-number-react';

// Achievments List
const achievmentsList = [
    {
        prefix: "",
        metric: "Projects",
        value: 2,
        postfix: "+",
        duration: 1000
    },
    {
        prefix: "",
        metric: "Certifications",
        value: 1,
        postfix: "+",
        duration: 1000
    },
    {
        prefix: "<",
        metric: "Years",
        value: 1,
        postfix: "",
        duration: 1000
    }
];

const AchievmentsSection = () => {
    return (
        <section className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <div className="flex flex-col sm:flex-row border border-[#33353F] rounded-md py-8 px-16 items-center justify-between">
                {achievmentsList.map((achiev, index) => {
                    return (
                        <div className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0" key={index}>
                            <h2 className="text-white text-4xl font-bold flex flex-row">
                                {achiev.prefix}
                                <AnimatedNumber value={achiev.value} formatValue={(value) => value.toFixed(0)} />
                                {achiev.postfix}
                            </h2>
                            <p className="text-[#ADB7BE] text-base">{achiev.metric}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default AchievmentsSection;