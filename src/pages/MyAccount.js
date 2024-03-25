import React from "react";

const MyAccount = () => {
    const InputBoxCSS =
        "block w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
    return (
        <>
            <div className="flex w-[75%] mx-auto justify-around">
                <div className="w-full mx-4">
                    <div class="col-span-full mt-2">
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Username or Email address
                        </label>
                        <div class="">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                className={InputBoxCSS}
                                required
                            />
                        </div>
                    </div>
                    <div class="col-span-full mt-2">
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <div class="">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="password"
                                className={InputBoxCSS}
                                required
                            />
                        </div>
                    </div>
                    <div class="flex h-6 items-center mt-2">
                        <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600 me-2"
                        />
                        <label for="comments" class="font-medium text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <button className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out">
                        LOGIN
                    </button>
                </div>

                <div className="w-full mx-4">
                    <div class="col-span-full mt-2">
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email address
                        </label>
                        <div class="">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                className={InputBoxCSS}
                            />
                        </div>
                    </div>
                    <div class="col-span-full mt-2">
                        <label
                            for="email"
                            class="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <div class="">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autocomplete="password"
                                className={InputBoxCSS}
                            />
                        </div>
                    </div>
                    <p class="text-gray-500 text-sm mt-2 mx-1">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our{" "}
                        <span className="text-blue-400 underline">
                            privacy policy.
                        </span>
                    </p>
                    <button className="py-2 px-3 my-3 border bg-[#172d3b] text-white rounded-md hover:bg-[#29b7ff] transition-all ease-in-out">
                        REGISTER
                    </button>
                </div>
            </div>
        </>
    );
};

export default MyAccount;
