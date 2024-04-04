import React, { useState, useEffect } from "react";
import AllCards from "../components/cards/AllCards";
import CardShimmer from "../utils/CardShimmer";
import Carousel from "../components/header/carousel/Carousel";
import { REACT_APP_BACKEND_URL, IMAGES } from "../config";
import { useDispatch } from "react-redux";
import { addCards } from "../utils/redux/cardSlice";

const Home = () => {
    // Backup Function if API Fucked up
    const FetchBackupData = () => {
        // Here I'll get data from Data (directory) to put some on Website if fetch failed...
        // (so site will never fucked up *maybe*)
        // Create Custom Hook for fetching data from direcotry....
        return [];
    };
    const dispatch = useDispatch();
    const [allCards, setAllCards] = useState(FetchBackupData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${REACT_APP_BACKEND_URL}/products`
                );
                const data = await response.json();
                // console.log(data);
                setAllCards(data);
                dispatch(addCards(data));
            } catch (error) {
                console.log("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <Carousel IMAGES={IMAGES} />
            <>{loading ? <CardShimmer /> : <AllCards allCards={allCards} />}</>
        </>
    );
};

export default Home;
