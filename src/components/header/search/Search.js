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
                        // className="absolute w-[200px] text-black px-2"
                        className="absolute w-[200px] py-1 px-3 focus:outline-none focus:shadow-outline text-lg text-black"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                )}
                {/* The Input should be Active && the search Text should not null && filterCards is not null too */}
                {isActiveInput && searchText && filteredCards.length && (
                    <div className="w-[200px] h-full border absolute mt-10 text-black bg-white">
                        {filteredCards.map((card, i) => {
                            return (
                                <div
                                    className="px-3 w-[200px] h-full flex text-black bg-white border-b-2"
                                    key={card._id}
                                >
                                    {card?.image ? (
                                        <img src={card?.image} />
                                    ) : (
                                        <img src={deafultImage} />
                                    )}
                                    <p>{card.title}</p>
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
