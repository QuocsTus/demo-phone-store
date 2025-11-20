import { useEffect, useState } from 'react';
import { getProducts } from '../../../services/productService';
import type { Product } from '../../../services/productService';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map((p) => (
                    <Link to={`/products/${p._id}`} key={p._id} className="bg-white p-4 shadow rounded hover:shadow-lg transition">
                        <img src={p.image || 'https://via.placeholder.com/200'} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
                        <p className="text-red-600 font-bold">{p.price.toLocaleString()} đ</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
