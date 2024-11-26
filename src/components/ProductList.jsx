import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import {useOutletContext} from "react-router-dom";

const ProductList = () => {
    const { searchTerm } = useOutletContext(); // Access searchTerm from context
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = searchTerm.trim()
                    ? `http://localhost:8081/api/products/search?name=${searchTerm}`
                    : 'http://localhost:8081/api/products';

                const response = await axios.get(url);

                const apiProducts = response.data.map((product) => ({
                    name: product.productName,
                    price: product.price,
                    image: product.productImage || 'https://via.placeholder.com/150',
                    id: product.productID,
                }));

                setProducts(apiProducts);
                setLoading(false);
            } catch (err) {
                setError(err.message || 'Failed to fetch products.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, [searchTerm]);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-content">
            <h2>{searchTerm ? `Search Results for "${searchTerm}"` : 'Available Products'}</h2>
            <div className="product-list">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
