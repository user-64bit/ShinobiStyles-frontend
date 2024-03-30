import React, { useState } from "react";

const SizeVariant = ({ size, selectedSize, setSelectedSize }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <button
            className={`px-3 py-1 me-2 mt-1 border-2 rounded-md ${
                selectedSize === size
                    ? "border-[#ff24aa]"
                    : isHovered
                    ? "border-[#ff24aa]"
                    : "border-gray-300"
            }`}
            onClick={() => setSelectedSize(size)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p>{size}</p>
        </button>
    );
};

const SizeVariants = ({ sizes, selectedSize, setSelectedSize }) => {
    return (
        <div>
            <p>Size: {selectedSize}</p>
            <div className="flex">
                {sizes?.map((size, i) => (
                    <SizeVariant
                        key={i}
                        size={size}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                    />
                ))}
            </div>
        </div>
    );
};

export default SizeVariants;
