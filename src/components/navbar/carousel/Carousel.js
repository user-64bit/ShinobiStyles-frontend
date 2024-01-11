import React, { useState, useRef, useEffect } from "react";
import {
    EvaArrowCircleLeftOutline,
    EvaArrowCircleRightOutline,
} from "../../icons/Icons";

const Carousel = ({ IMAGES }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const listRef = useRef(null);
    let delay = 2500;
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            const listNode = listRef.current;
            const imgNode = listNode.querySelectorAll("img")[currentIndex];
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
            setCurrentIndex((idx) => {
                return idx + 1 === IMAGES.length ? 0 : idx + 1;
            });
            return () => {
                clearTimeout(timeoutRef.current);
            };
        }, delay);
    }, [currentIndex]);
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
            <div className="slideshow overflow-hidden">
                <div
                    className="slideshowSlider whitespace-nowrap transition-transform duration-1000 ease-in-out"
                    ref={listRef}
                >
                    {IMAGES.map((url, index) => (
                        <img
                            key={index}
                            src={url}
                            className="w-[600px] inline-block border border-
                        gray-500 z-50"
                        />
                    ))}
                </div>
            </div>
            <div>
                <EvaArrowCircleLeftOutline
                    className="text-3xl"
                    onClick={handlePrev}
                />
                <EvaArrowCircleRightOutline
                    className="text-3xl float-right clear-both"
                    onClick={handleNext}
                />
            </div>
        </>
    );
};

export default Carousel;
