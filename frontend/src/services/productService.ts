export interface Product {
    _id?: string;
    name: string;
    price: number;
    description?: string;
    image?: string;
}

const API_URL = 'http://localhost:3001/api/products';

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(API_URL);
    return res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
    const res = await fetch(`${API_URL}/${id}`);
    return res.json();
};
