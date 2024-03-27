import React, { useState } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const AllCards = ({ allCards }) => {
    const latestDrops = allCards.slice(0, 6);
    const [trendyDrops, setTrendyDrops] = useState(
        allCards?.slice(0, 6) == null ? [] : allCards?.slice(0, 6)
    );
    const showAllCards = () => {
        // FIXME: redirect to `/products/trendy-drops/` and show all cards
        setTrendyDrops(allCards);
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-20">
                {/* FIXME: Decide some logic to put Data in Latest Drops categories */}
                <h1 className="pb-8 text-4xl font-bold">LATEST DROPS</h1>
                <div className="flex flex-wrap">
                    {latestDrops.map((data, id) => {
                        return (
                            <Link
                                to={"/products/" + data?._id}
                                state={{ data: data }}
                                key={data?._id}
                            >
                                <Card data={data} />
                            </Link>
                        );
                    })}
                </div>

                {/* FIXME: Decide Some logic to check trending Gears */}
                <h1 className="py-4 text-4xl font-bold uppercase">
                    Trendi Winter Gears
                </h1>
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap">
                        {trendyDrops.map((data, id) => {
                            return (
                                <Link
                                    to={"/products/" + data?._id}
                                    key={data?._id}
                                >
                                    <Card data={data} />
                                </Link>
                            );
                        })}
                    </div>
                    <button
                        className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out"
                        onClick={(e) => showAllCards()}
                    >
                        VIEW MORE
                    </button>
                </div>

                <h1 className="py-4 text-4xl font-bold uppercase">
                    Top Categories
                </h1>
                {/* FIXME: Create Categories Card */}
                <div></div>
            </div>
        </>
    );
};

export default AllCards;
