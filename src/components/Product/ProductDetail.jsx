// ProductDetail.js
import React from 'react';

const ProductDetail = () => {
    return (
        <section className="product-detail-section">
            <div className="container">
                <div className="grid">
                    {/* Image Section */}
                    <div className="img-box">
                        <img
                            src="https://pagedone.io/asset/uploads/1700471600.png"
                            alt="Yellow Tropical Printed Shirt"
                            className="product-image"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="product-details">
                        <p className="category">Clothing / Menswear</p>
                        <h2 className="product-title">Basic Yellow Tropical Printed Shirt</h2>
                        <div className="price-rating">
                            <h6 className="price">$220</h6>
                            <div className="rating">
                                <span className="stars">⭐⭐⭐⭐☆</span>
                                <span className="review-count">1624 reviews</span>
                            </div>
                        </div>
                        <p className="product-description">
                            Introducing our vibrant Basic Yellow Tropical Printed Shirt - a celebration of style and
                            sunshine! Embrace the essence of summer wherever you go with this eye-catching piece that
                            effortlessly blends comfort and tropical flair. <a href="#" className="more-link">More....</a>
                        </p>

                        {/* Features */}
                        <ul className="features">
                            <li>Branded shirt</li>
                            <li>3 color options</li>
                            <li>Pure cotton blend (60% cotton, 40% polyester)</li>
                            <li>All sizes available</li>
                        </ul>

                        {/* Size Selector */}
                        <p className="size-title">Size</p>
                        <div className="size-options">
                            <button className="size-button">S</button>
                            <button className="size-button">M</button>
                            <button className="size-button">L</button>
                            <button className="size-button">XL</button>
                            <button className="size-button">XXL</button>
                        </div>

                        {/* Quantity Selector */}
                        <div className="quantity-cart">
                            <div className="quantity-selector">
                                <button className="quantity-button">-</button>
                                <input type="text" className="quantity-input" placeholder="1" />
                                <button className="quantity-button">+</button>
                            </div>
                            <button className="add-to-cart">
                                <span>Add to cart</span>
                            </button>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            <button className="wishlist-button">❤️</button>
                            <button className="buy-now-button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;
