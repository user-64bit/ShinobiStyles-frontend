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
                <span className="px-2 py-1 rounded-md hover:bg-[#5e3fde] hover:text-white ease-in-out transition-all">
                    -
                </span>
            </button>
            <input
                className="w-10 text-center outline-none"
                type="number"
                value={count}
                onChange={handleInputChange}
            />
            <button
                className="py-3 px-4"
                onClick={() => setCount((count) => count + 1)}
            >
                <span className="px-2 py-1 rounded-md hover:bg-[#5e3fde] hover:text-white ease-in-out transition-all">
                    +
                </span>
            </button>
        </div>
    );
};

export default QuantityCounter;
