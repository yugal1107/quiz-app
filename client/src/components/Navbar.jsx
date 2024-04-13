import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-white text-2xl font-bold">Quiz App</a>
                <div>
                    <a href="" className="text-white">Home</a>
                    <a href="" className="text-white ml-4">About Us</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;