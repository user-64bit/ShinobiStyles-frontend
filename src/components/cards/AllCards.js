import React from "react";
import Card from "./Card";
import LatestDrops from "./LatestDrops";

const AllCards = ({ allCards }) => {
    const latestDrops = allCards.slice(0, 6);
    return (
        <>
            <div className="w-[80%] mx-auto pt-10">
                {/* Latest Drops */}
                {/* FIXME: Decide some logic to put Data in Latest Drops categories */}
                <h1 className="pb-4 text-center text-4xl font-bold">
                    LATEST DROPS
                </h1>
                <div className="flex flex-wrap">
                    {latestDrops.map((data) => {
                        return <LatestDrops data={data} key={data.id} />;
                    })}
                </div>

                {/* FIXME: Decide Some logic to check trending Gears */}
                <h1 className="py-4 text-center text-4xl font-bold">
                    Trending Gears
                </h1>
                {/* FIXME: Dont' show every items, only show one card line and put view more button */}
                <div className="flex flex-wrap">
                    {allCards.map((data) => {
                        return <Card data={data} key={data.id} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default AllCards;
