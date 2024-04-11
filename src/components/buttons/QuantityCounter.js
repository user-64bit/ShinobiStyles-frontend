import React from "react";

const QuantityCounter = ({ setCount, count }) => {
    const handleInputChange = (e) => {
        const newCount = parseInt(e.target.value);
        if (!isNaN(newCount) && newCount > 0) {
            setCount(newCount);
        } else {
            setCount(1);
        }
    };

    return (
        <div className="border">
            <button
                className="py-3 px-4"
                onClick={() =>
                    setCount((count) => (count - 1 < 1 ? 1 : count - 1))
                }
            >
                <span className="md:px-2 md:py-1 rounded-md hover:bg-[#5e3fde] hover:text-white ease-in-out transition-all">
                    -
                </span>
            </button>
            <input
                className="md:w-10 w-4 text-center outline-none"
                type="number"
                value={count}
                onChange={handleInputChange}
            />
            <button
                className="py-3 px-4"
                onClick={() => setCount((count) => count + 1)}
            >
                <span className="md:px-2 md:py-1 rounded-md hover:bg-[#5e3fde] hover:text-white ease-in-out transition-all">
                    +
                </span>
            </button>
        </div>
    );
};

export default QuantityCounter;
