import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiInfo, FiMail, FiMessageCircle, FiUser, FiUsers } from "react-icons/fi";
import { BsFillChatDotsFill, BsFillCameraVideoFill } from "react-icons/bs";

const Communities = () => {
    return (
        <div>
            {/* Header */}
            <header className="fixed top-0 w-full flex items-center justify-between py-4 px-6 bg-emerald-500 shadow-md z-10">
                {/* App Logo */}
                <Link to="/home" className="flex items-center gap-2 text-white text-lg font-bold">
                    <FiMessageCircle size={24} />
                    Communities
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
    )
}

export default Communities