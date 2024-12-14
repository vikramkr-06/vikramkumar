import React, { useState } from "react";
import JsonData from "./JsonData";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiInfo, FiMail, FiMessageCircle, FiUser, FiUsers } from "react-icons/fi";
import { BsFillChatDotsFill, BsFillCameraVideoFill } from "react-icons/bs";

const MainWebPage = () => {
    const navigate = useNavigate();

    // State for search input and filtered users
    const [searchInput, setSearchInput] = useState("");

    const handleUserClick = (userId) => {
        navigate(`/chat/${userId}`);
    };

    // Function to filter users based on search input
    const filteredUsers = JsonData.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    const renderUserData = () => {
        return filteredUsers.map((user) => (
            <div
                key={user.id}
                className="flex items-center justify-between user-card border p-4 rounded-lg shadow-lg mb-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleUserClick(user.id)}
            >
                <img
                    src={user.profile_photo}
                    alt={user.name}
                    className="w-20 h-20 rounded-full"
                />
                <div className="mr-28">
                    <h3 className="text-start text-xl font-semibold">{user.name}</h3>
                    <p className="text-start text-gray-600">{user.profession}</p>
                </div>
                <p className="text-center text-sm text-gray-400">{user.time}</p>
            </div>
        ));
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <header className="fixed top-0 w-full flex items-center justify-between py-4 px-6 bg-emerald-500 shadow-md z-10">
                {/* App Logo */}
                <Link to="/home" className="flex items-center gap-2 text-white text-lg font-bold">
                    <FiMessageCircle size={24} />
                    BuzzChat
                </Link>

                {/* Navigation Icons */}
                <nav className="flex items-center gap-6">
                    <Link to="/mainwebpage" className="text-white hover:text-gray-300">
                        <FiHome size={22} />
                    </Link>
                    <Link to="/about" className="text-white hover:text-gray-300">
                        <FiInfo size={22} />
                    </Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">
                        <FiMail size={22} />
                    </Link>
                </nav>
            </header>

            {/* Search Bar */}
            <div className="py-3 px-4 mt-20">
                <div className="relative max-w-lg mx-auto">
                    <input
                        type="text"
                        className="w-full bg-white border border-gray-300 text-gray-800 text-lg rounded-lg focus:ring-emerald-400 focus:border-emerald-400 py-2 pl-12 pr-4 shadow-sm"
                        placeholder="Search Contacts..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} // Update search input
                    />
                    <svg
                        className="w-6 h-6 text-gray-400 absolute top-2.5 left-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 16l4-4m0 0l4-4m-4 4H4"
                        />
                    </svg>
                </div>
            </div>

            {/* Main Section */}
            <main className="p-6 mb-12 mx-auto max-w-xl">
                {filteredUsers.length > 0 ? (
                    <div className="flex flex-col gap-1">{renderUserData()}</div>
                ) : (
                    <p className="text-center text-gray-500 text-lg mt-10">
                        No users found for "{searchInput}"
                    </p>
                )}
            </main>

            {/* Footer */}
            <footer className="fixed bottom-0 bg-white w-full flex items-center justify-around py-3 border-t shadow-md">
                <Link to="/mainwebpage" className="flex flex-col items-center text-gray-500 hover:text-emerald-500">
                    <BsFillChatDotsFill size={24} />
                    <span className="text-sm">Chats</span>
                </Link>
                <Link to="/status" className="flex flex-col items-center text-gray-500 hover:text-emerald-500">
                    <FiUser size={24} />
                    <span className="text-sm">Status</span>
                </Link>
                <Link to="/calls" className="flex flex-col items-center text-gray-500 hover:text-emerald-500">
                    <BsFillCameraVideoFill size={24} />
                    <span className="text-sm">Calls</span>
                </Link>
                <Link to="/communities" className="flex flex-col items-center text-gray-500 hover:text-emerald-500">
                    <FiUsers size={24} />
                    <span className="text-sm">Communities</span>
                </Link>
            </footer>
        </div>
    );
};

export default MainWebPage;
