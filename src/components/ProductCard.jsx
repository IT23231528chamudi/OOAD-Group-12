import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = async () => {
        const payload = {
            userId: 1, // Always set userId to 1
            productId: product.id,
            quantity: 1, // Default quantity is 1
        };

        try {
            const response = await axios.post('http://localhost:8081/api/cart/add-item', payload);
            console.log('Item added to cart successfully:', response.data);
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart. Please try again.');
        }
    };

    return (
        <div className="product-card">
            <img
                src={product.image || 'default_image.jpg'}
                alt={product.name}
                onClick={handleProductClick}
            />
            <div className="product-info">
                <div>
                    <h6 className="product-name">{product.name}</h6>
                    <h6 className="product-price">Rs.{product.price.toFixed(2)}</h6>
                </div>
                <button className="add-to-cart" onClick={handleAddToCart}>
                    🛒
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
