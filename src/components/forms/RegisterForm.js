import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/redux/userSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { InputBoxCSS } from "../../config";
import { auth } from "../../utils/firebase";

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
    return (
        <form className="w-full mx-4" onSubmit={formikRegister.handleSubmit}>
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
                        value={formikRegister.values.passwordRegister}
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
                        value={formikRegister.values.password2Register}
                    />
                </div>
            </div>
            <p className="text-gray-500 text-sm mt-2 mx-1">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                htmlFor other purposes described in our{" "}
                <span className="text-blue-400 underline">privacy policy.</span>
            </p>
            <button
                className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out"
                type="submit"
            >
                REGISTER
            </button>
        </form>
    );
};

export default RegisterForm;
