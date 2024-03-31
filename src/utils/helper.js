export const CheckIfExists = (cartItems, item) => {
    return cartItems?.find((cartItem) => cartItem._id === item._id);
};
