// import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Header from './header';

export default function AdminLayout() {
    return (
        <div className="w-full min-h-screen flex">
            <Sidebar />

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                <Header />
                {/* Page content */}
                <main className="flex-1 p-4 bg-gray-100">
                    <Outlet />
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white p-4 text-center">© 2025 Admin Panel</footer>
            </div>
        </div>
    );
}
