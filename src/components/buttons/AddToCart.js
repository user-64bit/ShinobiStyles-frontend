import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/redux/cartSlice";
const AddToCart = ({ data }) => {
    const dispatch = useDispatch();
    const handleOnClickCart = () => {
        if (data?.size !== "") {
            console.log(data);
            dispatch(addItems(data));
        }
    };
    const isDisable = data?.size === "";
    return (
        <div>
            <button
                className={`bg-[#5e3fde] py-3 px-24 text-white`}
                style={{ cursor: `${isDisable ? "not-allowed" : ""}` }}
                onClick={() => handleOnClickCart()}
            >
                Add to cart
            </button>
        </div>
    );
};

export default AddToCart;
