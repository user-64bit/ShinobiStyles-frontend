import { Formik, Field, Form, useFormikContext, useField } from "formik";
import React, { useEffect, useState } from "react";
import { InputBoxCSS } from "../../config";
import { Country, State, City } from "country-state-city";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { setUserShippingDetails } from "../../utils/redux/userSlice";
import { useNavigate } from "react-router-dom";

// Validation
const userDetailsSchema = Yup.object().shape({
    email: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required!!"),
    phone: Yup.number().required("Required!!").positive().integer(),
    firstName: Yup.string().required("Required!!"),
    lastName: Yup.string().required("Required!!"),
    street: Yup.string().required("Required!!"),
    country: Yup.string().required("Required!!"),
    state: Yup.string().required("Required!!"),
    city: Yup.string().required("Required!!"),
});

const StateField = (props) => {
    const {
        values: { country },
        touched,
        setFieldValue,
    } = useFormikContext();
    const [field, meta] = useField(props);
    const [states, setStates] = useState([]);
    useEffect(() => {
        setStates(State.getStatesOfCountry(country));
    }, [country, setFieldValue, props.name, touched.country]);
    return (
        <Field as="select" {...props} {...field} className={InputBoxCSS}>
            <option value="">Select a state</option>
            {states?.map((obj) => {
                return (
                    <option key={obj.name} value={obj.isoCode}>
                        {obj.name}
                    </option>
                );
            })}
        </Field>
    );
};
const CityField = (props) => {
    const {
        values: { country, state },
        touched,
        setFieldValue,
    } = useFormikContext();
    const [field, meta] = useField(props);
    const [cities, setCities] = useState([]);
    useEffect(() => {
        setCities(City.getCitiesOfState(country, state));
    }, [
        country,
        setFieldValue,
        props.name,
        touched.country,
        state,
        touched.state,
    ]);
    return (
        <Field as="select" {...props} {...field} className={InputBoxCSS}>
            <option value="">Select a city</option>
            {cities?.map((obj) => {
                return (
                    <option key={obj.name} value={obj.isoCode}>
                        {obj.name}
                    </option>
                );
            })}
        </Field>
    );
};

const UserShippingDetails = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        state: "",
        zip: "",
    };
    const countries = Country.getAllCountries();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                dispatch(
                    setUserShippingDetails({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        phone: values.phone,
                        country: values.country,
                        state: values.state,
                        city: values.city,
                        street: values.street,
                        zip: values.zip,
                    })
                );
                navigate("/");
            }}
            validationSchema={userDetailsSchema}
        >
            {({ errors, touched, isSubmitting }) => (
                <Form className="w-3/5 mx-auto">
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div className="">
                            <Field
                                id="email"
                                name="email"
                                type="email"
                                className={InputBoxCSS}
                            />
                            {errors.email && touched.email ? (
                                <div className="text-red-500 pt-1">
                                    {errors.email}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Phone Number
                        </label>
                        <div className="">
                            <Field
                                id="phone"
                                name="phone"
                                type="phone"
                                className={InputBoxCSS}
                            />
                            {errors.phone && touched.phone ? (
                                <div className="text-red-500 pt-1">
                                    {errors.phone}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 mt-2 pe-3">
                            <label
                                htmlFor="firstName"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                First Name
                            </label>
                            <div className="">
                                <Field
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className={InputBoxCSS}
                                />
                                {errors.firstName && touched.firstName ? (
                                    <div className="text-red-500 pt-1">
                                        {errors.firstName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-1/2 mt-2 ps-3">
                            <label
                                htmlFor="lastName"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Last Name
                            </label>
                            <div className="">
                                <Field
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    className={InputBoxCSS}
                                />
                                {errors.lastName && touched.lastName ? (
                                    <div className="text-red-500 pt-1">
                                        {errors.lastName}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="country"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Country
                        </label>
                        <div className="">
                            <Field
                                as="select"
                                id="country"
                                name="country"
                                className={InputBoxCSS}
                            >
                                <option value="">Select Country</option>
                                {countries.map((obj, _) => {
                                    return (
                                        <option
                                            key={obj.name}
                                            value={obj.isoCode}
                                        >
                                            {obj.name}
                                        </option>
                                    );
                                })}
                            </Field>
                            {errors.country && touched.country ? (
                                <div className="text-red-500 pt-1">
                                    {errors.country}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="street"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Street Address
                        </label>
                        <div className="">
                            <Field
                                id="street"
                                name="street"
                                type="text"
                                className={InputBoxCSS}
                            />
                            {errors.street && touched.street ? (
                                <div className="text-red-500 pt-1">
                                    {errors.street}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="state"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            State
                        </label>
                        <div className="">
                            <StateField name="state" />
                            {errors.state && touched.state ? (
                                <div className="text-red-500 pt-1">
                                    {errors.state}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <div className="col-span-full mt-2">
                        <label
                            htmlFor="city"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            City
                        </label>
                        <div className="">
                            <CityField name="city" />
                            {errors.city && touched.city ? (
                                <div className="text-red-500 pt-1">
                                    {errors.city}
                                </div>
                            ) : null}
                        </div>
                    </div>
                    <button
                        className="mt-4 py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md  w-full"
                        type="submit"
                        disabled={isSubmitting}
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};
export default UserShippingDetails;
