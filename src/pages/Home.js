import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import AllCards from "../components/cards/AllCards";
import CardShimmer from "../utils/CardShimmer";

const Home = () => {
    // Backup Function if API Fucked up
    const FetchBackupData = () => {
        // Here I'll get data from Data (directory) to put some on Website if fetch failed...
        // (so site will never fucked up *maybe*)
        // Create Custom Hook for fetching data from direcotry....
        return [];
    };
    const [allCards, setAllCards] = useState(FetchBackupData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/products");
                // const response = await fetch(
                //     "https://fakestoreapi.com/products"
                // );
                // const temp2 = await temp.json();
                // console.log(temp2);
                const data = await response.json();
                console.log(data);
                setAllCards(data);
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
            <Header />
            <Navbar allCards={allCards} setAllCards={setAllCards} />
            <>{loading ? <CardShimmer /> : <AllCards allCards={allCards} />}</>
        </>
    );
};

export default Home;
