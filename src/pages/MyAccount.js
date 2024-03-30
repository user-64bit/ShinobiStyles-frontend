import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";

const MyAccount = () => {
    const user = useSelector((store) => store.user.user);
    return (
        <>
            {user ? (
                <h1>You're Already Logged in</h1>
            ) : (
                <div className="flex w-3/4 mx-auto justify-around py-[15%]">
                    <LoginForm />
                    <RegisterForm />
                </div>
            )}
        </>
    );
};

export default MyAccount;
