import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import AllCards from "../components/cards/AllCards";

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />
            <AllCards />
        </>
    );
};

export default Home;
