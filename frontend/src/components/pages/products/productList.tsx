import { useState } from 'react';

type Product = {
    _id: string;
    name: string;
    price: number;
    image?: string;
};

export default function ProductList() {
    // Danh sách sản phẩm tĩnh
    const [products] = useState<Product[]>([
        { _id: '1', name: 'Sản phẩm A', price: 100000, image: 'https://via.placeholder.com/200' },
        { _id: '2', name: 'Sản phẩm B', price: 250000 },
        { _id: '3', name: 'Sản phẩm C', price: 150000, image: 'https://via.placeholder.com/200' },
        { _id: '4', name: 'Sản phẩm D', price: 300000 },
    ]);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map((p) => (
                    <a
                        href="#"
                        key={p._id}
                        className="bg-white p-4 shadow rounded hover:shadow-lg transition"
                    >
                        <img
                            src={p.image || 'https://via.placeholder.com/200'}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
                        <p className="text-red-600 font-bold">{p.price.toLocaleString()} đ</p>
                    </a>
                ))}
            </div>
        </div>
    );
}
