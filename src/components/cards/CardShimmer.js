import React from "react";

const CardShimmer = () => {
    return (
        <>
            <h1 className="py-20 text-center text-4xl font-bold">
                LATEST DROPS
            </h1>
            <div className="flex flex-wrap justify-between w-[80%] mx-auto">
                {Array(15)
                    .fill("")
                    .map((idx) => {
                        return (
                            <>
                                <div
                                    className="w-[400px] max-w-sm my-2rounded-lg shadow animate-pulse my-4"
                                    key={idx}
                                >
                                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"></div>
                                    <div className="pb-5">
                                        <a href="#">
                                            <h5 className="w-full h-5 bg-gray-300 rounded dark:bg-gray-400"></h5>
                                        </a>
                                        <div className="mt-2.5 mb-5">
                                            <span className="w-12 h-5 bg-gray-300 rounded dark:bg-gray-400"></span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="w-28 h-10 bg-gray-300 rounded dark:bg-gray-400"></span>
                                            <a
                                                href="#"
                                                className="w-12 h-10 bg-gray-300 rounded dark:bg-gray-400"
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        );
                    })}
            </div>
        </>
    );
};

export default CardShimmer;
