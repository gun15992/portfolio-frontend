// Import Libraries
import React from 'react';

const CertificationTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-white border-green-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
    return (
        <button className={`${buttonStyles} rounded-full border-2 px-5 py-1 text-md cursor-pointer`} onClick={() => onClick(name)}>
            {name}
        </button>
    );
}

export default CertificationTag;