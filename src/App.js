import "./App.css";
import React from "react";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./utils/redux/store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Home />
            </Provider>
        </>
    );
}

export default App;
