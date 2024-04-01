import { Formik, Field, Form, useFormikContext, useField } from "formik";
import React, { useEffect, useState } from "react";
import { InputBoxCSS } from "../../config";
import { Country, State, City } from "country-state-city";
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
    console.log(cities);
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
            onSubmit={async (values) => alert(JSON.stringify(values, null, 2))}
        >
            {(props) => (
                <Form className="w-3/5 mx-auto mt-[12%]">
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
                        </div>
                    </div>
                    <button
                        className="mt-4 py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out w-full"
                        type="submit"
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};
export default UserShippingDetails;
