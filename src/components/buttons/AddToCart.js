import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addItems, updateItem } from "../../utils/redux/cartSlice";
import { CheckIfExists } from "../../utils/helper";
import { BACKEND_URL } from "../../config";
const AddToCart = ({ data, selectedSize }) => {
    const dispatch = useDispatch();
    const [productId, setProductId] = useState("");
    const cartItems = useSelector((store) => store.cart.items);
    useEffect(() => {
        const title = `${data?.title}- ${selectedSize}`;
        getProductData(title);
    }, [selectedSize]);

    const getProductData = async (title) => {
        try {
            const {
                data: { productId },
            } = await axios.post(`${BACKEND_URL}/product_id`, {
                title,
            });
            setProductId(productId);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };
    const handleOnClickCart = () => {
        if (data?.size !== "") {
            const newData = {
                ...data,
                _id: productId,
            };
            if (CheckIfExists(cartItems, newData)) {
                dispatch(updateItem(newData));
            } else {
                dispatch(addItems(newData));
            }
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
