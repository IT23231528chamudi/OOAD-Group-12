// ProductList.js
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
    const products = [
        {
            name: "Skin care cream",
            price: 74.99,
            image: "https://pagedone.io/asset/uploads/1701157806.png",
        },
        {
            name: "Men’s Facial",
            price: 25,
            image: "https://pagedone.io/asset/uploads/1701157826.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
        {
            name: "Dark circles serum",
            price: 199.99,
            image: "https://pagedone.io/asset/uploads/1701157844.png",
        },
    ];

    return (
        <div className="main-content">
            <h2>Available Products</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
