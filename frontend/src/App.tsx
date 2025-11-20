// import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">My Store</h1>
                <nav>
                    <Link className="mr-4 hover:text-gray-300" to="/products">
                        Products
                    </Link>
                </nav>
            </header>

            <main className="flex-1 p-4">
                <Outlet /> {/* nơi ProductList / ProductDetail render */}
            </main>

            <footer className="bg-gray-800 text-white text-center p-4 mt-auto">© 2025 My Store</footer>
        </div>
    );
}
