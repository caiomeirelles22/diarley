"use client";

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <a href="#" className="text-xl font-bold">
                            Logo
                        </a>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="hover:underline">
                            Item 1
                        </a>
                        <a href="#" className="hover:underline">
                            Item 2
                        </a>
                        <a href="#" className="hover:underline">
                            Item 3
                        </a>
                        <a href="#" className="hover:underline">
                            Item 4
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu}>
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden transition-opacity duration-300">
                    <div className={`px-2 pt-2 pb-3 space-y-1 max-h-0 overflow-hidden ${isOpen ? 'max-h-full opacity-100' : 'max-h-0 opacity-0'}`}>
                        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md">
                            Item 1
                        </a>
                        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md">
                            Item 2
                        </a>
                        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md">
                            Item 3
                        </a>
                        <a href="#" className="block hover:bg-blue-800 px-3 py-2 rounded-md">
                            Item 4
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
