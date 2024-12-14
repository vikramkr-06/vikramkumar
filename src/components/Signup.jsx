import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChatbubblesOutline } from "react-icons/io5";

const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        rememberPassword: false,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        alert(`Welcome, ${formData.firstName} ${formData.lastName}! Your account has been created.`);
        console.log(formData);
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Left Side - Image & Content */}
            <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center ">
                <div className="absolute top-8 flex flex-col items-center">
                    <IoChatbubblesOutline className="text-blue-600 text-6xl mb-4" />
                    <p className="text-gray-700 text-lg font-semibold text-center px-4">
                        "Connect with your friends and family seamlessly. Fast, secure, and reliable messaging experience."
                    </p>
                </div>
                <img
                    src="/src/images/Sign-up.webp"
                    alt="Signup Illustration"
                    className="w-3/4 mt-36 md:mt-12 rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* First Name & Last Name - Row */}
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="w-1/2">
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last name"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="rememberPassword"
                                id="rememberPassword"
                                checked={formData.rememberPassword}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="rememberPassword"
                                className="ml-2 text-sm text-gray-700"
                            >
                                Remember Password
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Already have account */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <span
                                onClick={goToLogin}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
