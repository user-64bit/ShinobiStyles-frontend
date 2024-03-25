import React, { useState } from "react";
import { SearchIcon } from "../../icons/Icons";

const Search = ({ allCards }) => {
    // console.log(allCards);
    const [searchText, setSearchText] = useState("");
    // const filterCards = (txt) => {
    //     let result = [];
    //     allCards?.forEach((card) => {
    //         if (card?.title?.includes(txt)) {
    //             result.push(card);
    //         }
    //     });
    //     // setAllCards(result);
    //     return result;
    // };
    // console.log(searchText);
    return (
        <>
            <div className="h-4 hidden md:block">
                {/* FIXME: Search will work after typing each word. it will show similar product to the search. */}
                <input
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div className="h-4 block md:hidden">
                {/* FIXME: Search will work after typing each word. it will show similar product to the search. */}
                <SearchIcon className="cursor-pointer text-2xl" />
            </div>
        </>
    );
};

export default Search;
