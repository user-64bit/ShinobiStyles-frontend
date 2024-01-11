import React, { useState, useRef, useEffect } from "react";
import {
    EvaArrowCircleLeftOutline,
    EvaArrowCircleRightOutline,
} from "../../icons/Icons";

const Carousel = ({ IMAGES }) => {
    const listRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        let timeid = setTimeout(() => {
            const listNode = listRef.current;
            const imgNode = listNode.querySelectorAll("img")[currentIndex];
            imgNode.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
            });
            handleNext();
            return () => {
                clearTimeout(timeid);
            };
        }, 3000);
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
            <div
                className="flex justify-center h-max overflow-hidden"
                ref={listRef}
            >
                {IMAGES.map((img) => {
                    return (
                        <>
                            <img
                                key={currentIndex}
                                src={img}
                                className="w-[600px] border border-gray-500"
                            />
                        </>
                    );
                })}
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
