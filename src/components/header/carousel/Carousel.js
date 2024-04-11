import React, { useState } from "react";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "../../icons/Icons";

const Carousel = ({ IMAGES }) => {
    const [currentIndex, setCurrentIndex] = useState(3);
    // Handle Next and Previous is not working currently
    const handleNext = () => {
        setCurrentIndex((idx) => {
            return idx + 1 === IMAGES.length ? 0 : idx + 1;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((idx) => {
            return idx - 1 < 0 ? IMAGES.length - 1 : idx - 1;
        });
    };
    return (
        <>
            <div className="relative max-w-full">
                <button
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 text-4xl py-20 hover:bg-gradient-to-r hover:from-black hover:bg-opacity-80 hover:text-white"
                    onClick={() => handlePrev()}
                >
                    <RiArrowLeftWideLine />
                </button>

                <div className="overflow-x-scroll no-scrollbar bg-gray-300 rounded shadow-md pt-0 md:p-0">
                    <div className="flex">
                        {IMAGES.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                alt="Image 1"
                                className={`w-[350px] object-cover md:w-[500px]`}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 text-4xl py-20 hover:bg-gradient-to-l hover:from-black hover:bg-opacity-80 hover:text-white"
                    onClick={() => handleNext()}
                >
                    <RiArrowRightWideLine />
                </button>
            </div>
        </>
    );
};

export default Carousel;
