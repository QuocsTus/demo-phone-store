import { Home, Users, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menu = [
    { name: 'Dashboard', path: '/', icon: <Home size={18} /> },
    { name: 'Users', path: '/users', icon: <Users size={18} /> },
    { name: 'Products', path: '/products', icon: <Package size={18} /> },
];

export default function Sidebar() {
    const { pathname } = useLocation();

    return (
        <div className="w-60 bg-gray-900 text-white h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Admin Panel</h2>

            <nav className="space-y-2">
                {menu.map((item) => (
                    <Link key={item.path} to={item.path} className={`flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 ${pathname === item.path ? 'bg-gray-700' : ''}`}>
                        {item.icon}
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
