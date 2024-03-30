import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/redux/userSlice";
import { auth } from "../../utils/firebase";
import { InputBoxCSS } from "../../config";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    return (
        <form className="w-full mx-4" onSubmit={formikLogin.handleSubmit}>
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
    );
};

export default LoginForm;
