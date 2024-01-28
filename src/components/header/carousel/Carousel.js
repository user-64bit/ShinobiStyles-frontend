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
    console.log("tick tack");
    // useEffect(() => {
    //     timeoutRef.current = setTimeout(() => {
    //         const listNode = listRef.current;
    //         const imgNode = listNode.querySelectorAll("img")[currentIndex];
    //         imgNode.scrollIntoView({
    //             behavior: "smooth",
    //             block: "nearest",
    //             inline: "center",
    //         });
    //         setCurrentIndex((idx) => {
    //             return idx + 1 === IMAGES.length ? 0 : idx + 1;
    //         });
    //         return () => {
    //             clearTimeout(timeoutRef.current);
    //         };
    //     }, delay);
    // }, [currentIndex]);

    /*
    No Functionality Works here... There is only Animatin of Image
    */
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
            <div className="relative -top-[182px] overflow-hidden">
                <article className="flex w-[200%] animate-slider">
                    <div className="w-[100%]">
                        <ul className="flex">
                            {IMAGES.map((url, idx) => {
                                return (
                                    <li className="w-[100%]" key={url + idx}>
                                        <img src={url} className="w-[600px]" />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-[100%]">
                        <ul className="flex">
                            {IMAGES.map((url, idx) => {
                                return (
                                    <li className="w-[100%]" key={url + idx}>
                                        <img
                                            src={url}
                                            className="bg-cover w-[600px]"
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </article>
                <div className="">
                    {" "}
                    {/* Centered container */}
                    <EvaArrowCircleLeftOutline
                        className="text-4xl absolute top-1/2 cursor-pointer"
                        onClick={handlePrev}
                    />
                    <EvaArrowCircleRightOutline
                        className="text-4xl absolute top-1/2 right-0 cursor-pointer"
                        onClick={handleNext}
                    />
                </div>
            </div>
        </>
    );
};

export default Carousel;
