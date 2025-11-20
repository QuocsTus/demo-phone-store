// import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '../layout/adminLayout';
import ProductList from '../pages/products/productList';
import ProductDetail from '../pages/products/productDetail';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AdminLayout />,
        children: [
            { path: 'products', element: <ProductList /> },
            { path: 'products/:id', element: <ProductDetail /> },
        ],
    },
]);
