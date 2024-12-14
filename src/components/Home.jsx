import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
    const navigate = useNavigate();

    const goToSignup = () => {
        navigate("/signup");
        console.log("Navigating to Signup Page");
    };

    return (
        <div
            className="bg-gradient-to-br from-emerald-400 via-green-300 to-emerald-100 flex flex-col items-center justify-center h-screen"
        >
            {/* Image Section */}
            <div className="relative w-full max-w-lg">
                <img
                    className="w-full rounded-3xl shadow-lg"
                    src="/src/images/Home.webp"
                    alt="BuzzChat Home"
                />
                {/* Decorative Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40 rounded-3xl"></div>
            </div>

            {/* Button Section */}
            <button
                onClick={goToSignup}
                className="mt-8 flex items-center justify-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-full shadow-lg hover:scale-105 hover:from-emerald-500 hover:to-green-500 transition-transform duration-300"
            >
                <AiOutlineArrowRight size={20} className="text-white" />
                Continue With BuzzChat
            </button>

            {/* Paragraph Section */}
            <p className="mt-6 px-6 text-center text-gray-800 text-sm">
                Connect with your friends and family instantly on BuzzChat. Fast, secure, and easy to use.
            </p>
        </div>
    );
};

export default Home;
