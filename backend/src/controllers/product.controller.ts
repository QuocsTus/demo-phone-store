import { Request, Response } from 'express';
import Product, { IProduct } from '../models/product.model';

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.find();
    res.json(products);
};

export const getProductById = async (req: Request, res: Response) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

export const createProduct = async (req: Request, res: Response) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
};
