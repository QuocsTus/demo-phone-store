import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../services/productService';
import type { Product } from '../../../services/productService';

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (id) getProductById(id).then((res) => setProduct(res || null));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <div className="max-w-3xl bg-white shadow p-6 rounded m-6">
            <img src={product.image || 'https://via.placeholder.com/300'} className="w-full max-h-80 object-cover rounded" />
            <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
            <p className="text-red-500 text-xl font-semibold mt-2">{product.price.toLocaleString()} đ</p>
            <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
    );
}
