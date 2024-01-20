import React from "react";
import Card from "./Card";

const AllCards = ({ allCards }) => {
    return (
        <>
            <h1 className="py-20 text-center text-4xl font-bold">
                LATEST DROPS
            </h1>
            <div className="flex flex-wrap justify-between w-[80%] mx-auto">
                {allCards.map((data) => {
                    return <Card data={data} key={data.id} />;
                })}
            </div>
        </>
    );
};

export default AllCards;
