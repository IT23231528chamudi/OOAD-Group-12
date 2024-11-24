// ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
                <div>
                    <h6 className="product-name">{product.name}</h6>
                    <h6 className="product-price">${product.price.toFixed(2)}</h6>
                </div>
                <button className="add-to-cart">🛒</button>
            </div>
        </div>
    );
};

export default ProductCard;
