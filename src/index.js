import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Product from "./pages/Product";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/redux/store";
import Error from "./components/errors/Error";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./components/success/PaymentSuccess";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import UserShippingDetails from "./components/forms/UserShippingDetails";
import WishList from "./pages/WishListPage";
import TrendyDrops from "./pages/TrendyDrops";

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/my-account",
                element: <MyAccount />,
            },
            {
                path: "/products/:name",
                element: <Product />,
            },
            {
                path: "/products/trendy-drops/",
                element: <TrendyDrops />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/wishlist",
                element: <WishList />,
            },
            {
                path: "/shippingDetails",
                element: <UserShippingDetails />,
            },
            {
                path: "/checkout",
                element: <Checkout />,
            },
            {
                path: "/paymentsuccess",
                element: <PaymentSuccess />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
