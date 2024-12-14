import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="h-screen bg-slate-300 flex items-center justify-center">
            <img className="h-64 rounded-full" src="/src/images/Logo.webp" alt="" />
        </div>
    );
};

export default Logo;
