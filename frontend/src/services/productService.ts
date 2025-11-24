// export interface Product {
//     _id?: string;
//     name: string;
//     price: number;
//     description?: string;
//     image?: string;
// }

// const API_URL = 'http://localhost:3001/api/products';

// export const getProducts = async (): Promise<Product[]> => {
//     const res = await fetch(API_URL);
//     return res.json();
// };

// export const getProductById = async (id: string): Promise<Product> => {
//     const res = await fetch(`${API_URL}/${id}`);
//     return res.json();
// };

export type Product = {
    _id: string;
    name: string;
    price: number;
    image?: string;
    description?: string;
};

export const getProducts = async (): Promise<Product[]> => {
    return [
        { _id: '1', name: 'iPhone 15', price: 25000000, image: '/images/iphone15.jpg' },
        { _id: '2', name: 'Samsung S24', price: 22000000, image: '/images/s24.jpg' },
        { _id: '3', name: 'MacBook Air M2', price: 29000000, image: '/images/macbook.jpg' },
    ];
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
    const products = await getProducts();
    return products.find((p) => p._id === id);
};
