import React, { useState } from "react";
import { SearchIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import useDebounce from "../../../utils/hooks/useDebounce";
import deafultImage from "../../../assets/Slider1.png";
const Search = ({}) => {
    const [isActiveInput, setIsActiveInput] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [filteredCards, SetFilterCards] = useState([]);
    const allCards = useSelector((store) => store.cards.allCards);

    useDebounce(
        () => {
            SetFilterCards(
                allCards.filter((card) =>
                    card.title.toLowerCase().includes(searchText)
                )
            );
        },
        [searchText, allCards],
        1000
    );

    return (
        <>
            <div className="h-4">
                {/* FIXME: Design it good */}
                <SearchIcon
                    className="cursor-pointer text-3xl"
                    onClick={() => {
                        setIsActiveInput(!isActiveInput);
                        setSearchText("");
                    }}
                />
                {isActiveInput && (
                    <input
                        className="absolute w-36 md:w-[300px] py-1 px-3 mt-1 focus:outline-none focus:shadow-outline text-lg text-black bg-gray-200"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                )}
                {/* The Input should be Active && the search Text should not null && filterCards is not null too */}
                {isActiveInput && searchText && filteredCards.length && (
                    <div className="w-[300px] h-1/2 border absolute mt-10 text-black bg-gray-400">
                        {filteredCards.map((card, i) => {
                            return (
                                <div
                                    className="px-3 w-[300px] h-full flex text-black bg-gray-400 border-b-2 cursor-pointer"
                                    key={card._id}
                                >
                                    {card?.image ? (
                                        <img
                                            src={card?.image}
                                            className="py-2 me-3"
                                        />
                                    ) : (
                                        <img
                                            src={deafultImage}
                                            className="py-2 me-3"
                                        />
                                    )}
                                    <p className="py-4 mt-2 text-white hover:text-blue-500">
                                        {card.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
