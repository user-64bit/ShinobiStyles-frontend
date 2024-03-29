import { useFormik } from "formik";
import React from "react";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/redux/userSlice";

const MyAccount = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user.user);
    const formikLogin = useFormik({
        initialValues: {
            emailLogin: "",
            passwordLogin: "",
            rememberme: false,
        },
        onSubmit: (values) => {
            signInWithEmailAndPassword(
                auth,
                values.emailLogin,
                values.passwordLogin
            ).then((userCredential) => {
                const { email, displayName, phoneNumber } = userCredential.user;
                dispatch(setUser({ email, displayName, phoneNumber }));
                navigate("/");
            });
        },
    });
    const formikRegister = useFormik({
        initialValues: {
            emailRegister: "",
            passwordRegister: "",
            password2Register: "",
        },
        onSubmit: (values) => {
            createUserWithEmailAndPassword(
                auth,
                values.emailRegister,
                values.passwordRegister,
                values.password2Register
            ).then((userCredential) => {
                const { email, displayName, phoneNumber } = userCredential.user;
                dispatch(setUser({ email, displayName, phoneNumber }));
                navigate("/");
            });
        },
    });

    const InputBoxCSS =
        "block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2";
    return (
        <>
            {user ? (
                <h1>Hello</h1>
            ) : (
                <div className="flex w-3/4 mx-auto justify-around py-[15%]">
                    <form
                        className="w-full mx-4"
                        onSubmit={formikLogin.handleSubmit}
                    >
                        <div className="col-span-full mt-2">
                            <label
                                htmlFor="emailLogin"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="">
                                <input
                                    id="emailLogin"
                                    name="emailLogin"
                                    type="email"
                                    className={InputBoxCSS}
                                    onChange={formikLogin.handleChange}
                                    value={formikLogin.values.emailLogin}
                                />
                            </div>
                        </div>
                        <div className="col-span-full mt-2">
                            <label
                                htmlFor="passwordLogin"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="">
                                <input
                                    id="passwordLogin"
                                    name="passwordLogin"
                                    type="password"
                                    className={InputBoxCSS}
                                    onChange={formikLogin.handleChange}
                                    value={formikLogin.values.passwordLogin}
                                />
                            </div>
                        </div>
                        <div className="flex h-6 items-center mt-2">
                            <input
                                id="rememberme"
                                name="rememberme"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 me-2"
                                onChange={formikLogin.handleChange}
                                value={formikLogin.values.rememberme}
                            />
                            <label
                                htmlFor="rememberme"
                                className="font-medium text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>
                        <button
                            className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out"
                            type="submit"
                        >
                            LOGIN
                        </button>
                    </form>

                    <form
                        className="w-full mx-4"
                        onSubmit={formikRegister.handleSubmit}
                    >
                        <div className="col-span-full mt-2">
                            <label
                                htmlFor="emailRegister"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="">
                                <input
                                    id="emailRegister"
                                    name="emailRegister"
                                    type="email"
                                    className={InputBoxCSS}
                                    onChange={formikRegister.handleChange}
                                    value={formikRegister.values.emailRegister}
                                />
                            </div>
                        </div>
                        <div className="col-span-full mt-2">
                            <label
                                htmlFor="passwordRegister"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="">
                                <input
                                    id="passwordRegister"
                                    name="passwordRegister"
                                    type="password"
                                    className={InputBoxCSS}
                                    onChange={formikRegister.handleChange}
                                    value={
                                        formikRegister.values.passwordRegister
                                    }
                                />
                            </div>
                        </div>
                        <div className="col-span-full mt-2">
                            <label
                                htmlFor="password2Register"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Repeat Password
                            </label>
                            <div className="">
                                <input
                                    id="password2Register"
                                    name="password2Register"
                                    type="password"
                                    className={InputBoxCSS}
                                    onChange={formikRegister.handleChange}
                                    value={
                                        formikRegister.values.password2Register
                                    }
                                />
                            </div>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mx-1">
                            Your personal data will be used to support your
                            experience throughout this website, to manage access
                            to your account, and htmlFor other purposes
                            described in our{" "}
                            <span className="text-blue-400 underline">
                                privacy policy.
                            </span>
                        </p>
                        <button
                            className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out"
                            type="submit"
                        >
                            REGISTER
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default MyAccount;
