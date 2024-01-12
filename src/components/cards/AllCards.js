import React, { useEffect, useState } from "react";
import Card from "./Card";

const AllCards = () => {
    // Backup Function if API Fucked up
    const FetchBackupData = () => {
        // Here I'll get data from Data (directory) to put some on Website if fetch failed...
        // (so site will never fucked up *maybe*)
        return [];
    };
    const [allCards, setAllCards] = useState(FetchBackupData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://fakestoreapi.com/products"
                );
                const data = await response.json();
                setAllCards(data);
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // console.log(allCards);
    return (
        <>
            {loading ? (
                <div>isLoading...</div>
            ) : (
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
            )}
        </>
    );
};

export default AllCards;
