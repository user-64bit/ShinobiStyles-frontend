import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/cards/Card";
import WishList from "../components/buttons/WishList";

const TrendyDrops = () => {
    // FIXME: Directly target the cards.trendyCards (currently it's empty)
    const cards = useSelector((store) => store.cards);
    let trendyDrops = cards?.allCards;
    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="pb-8 text-4xl font-bold">Trendy Drops</h1>
            <div className="flex flex-wrap justify-center">
                {trendyDrops?.map((data, id) => {
                    return (
                        <div className="relative px-1" key={data?._id}>
                            <WishList data={data} />
                            <Link
                                to={
                                    "/products/trendy-drops/" +
                                    data?.title.split(" ").join("-")
                                }
                                state={{ data: data }}
                            >
                                <Card data={data} />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TrendyDrops;
