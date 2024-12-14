import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLockClosedOutline } from "react-icons/io5";

const Login = () => {
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate("/signup");
    };

    const goToHome = (e) => {
        e.preventDefault();
        navigate("/mainwebpage");
    };

    return (
        <div className="h-screen flex flex-col md:flex-row">
            {/* Left Side - Image & Content */}
            <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="absolute top-8 flex flex-col items-center">
                    <IoLockClosedOutline className="text-blue-600 text-6xl mb-4" />
                    <p className="text-gray-700 text-lg font-semibold text-center px-4">
                        "Securely access your account and stay connected anytime, anywhere."
                    </p>
                </div>
                <img
                    src="/src/images/Login.png"
                    alt="Login Illustration"
                    className="w-2/4 mt-36 md:mt-12 rounded-lg shadow-lg"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h1>
                    <form onSubmit={goToHome} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
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
                                id="password"
                                placeholder="Enter your password"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Login
                        </button>
                    </form>

                    {/* Signup Redirect */}
                    <div className="text-center mt-4">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{" "}
                            <span
                                onClick={goToSignup}
                                className="text-blue-500 cursor-pointer hover:underline"
                            >
                                Sign Up
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
