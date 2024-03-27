import React, { useState } from "react";
import { SearchIcon } from "../../icons/Icons";
import { useSelector } from "react-redux";
import useDebounce from "../../../utils/hooks/useDebounce";
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
                    className="cursor-pointer text-2xl"
                    onClick={() => {
                        setIsActiveInput(!isActiveInput);
                        setSearchText("");
                    }}
                />
                {isActiveInput && (
                    <input
                        className="absolute w-[200px] text-black px-2"
                        type="text"
                        placeholder="Search..."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                )}
                {isActiveInput && searchText && (
                    <div className="w-[200px] h-full border absolute mt-10 text-black bg-white">
                        {filteredCards.map((card, i) => {
                            return (
                                <div
                                    className="px-3 w-[200px] h-full flex text-black bg-white border-b-2"
                                    key={card._id}
                                >
                                    <img
                                        src={
                                            card.image
                                                ? card.image
                                                : "../../../assets/Slider1.png"
                                        }
                                    />
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
