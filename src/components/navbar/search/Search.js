import React, { useState } from "react";

const Search = ({ allCards }) => {
    console.log(allCards);
    const [searchText, setSearchText] = useState("");
    const filterCards = (txt) => {
        let result = [];
        allCards?.forEach((card) => {
            if (card?.title?.includes(txt)) {
                result.push(card);
            }
        });
        // setAllCards(result);
        return result;
    };
    console.log(searchText);
    return (
        <>
            <div className="h-4">
                <input
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={(e) => filterCards(searchText)}>Search</button>
            </div>
        </>
    );
};

export default Search;
