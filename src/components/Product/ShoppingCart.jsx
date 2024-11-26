import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [cartId, setCartId] = useState(null);
    const userId = 1; // Hardcoded user ID for this example

    useEffect(() => {
        // Fetch cart items for the user
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/cart/user/${userId}/items`);
                const items = response.data;

                // Set cart items and subtotal
                setCartItems(items);

                // Calculate subtotal
                const total = items.reduce((acc, item) => acc + item.totalPrice, 0);
                setSubtotal(total);

                // Extract and set cartId from the first item (assuming all items share the same cartId)
                if (items.length > 0) {
                    setCartId(items[0].cartId);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, [userId]);

    const handleQuantityChange = (itemId, newQuantity) => {
        // Update quantity locally for now
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.cartItemId === itemId
                    ? {
                        ...item,
                        quantity: newQuantity,
                        totalPrice: newQuantity * item.unitPrice,
                    }
                    : item
            )
        );

        // Recalculate subtotal
        const updatedSubtotal = cartItems.reduce(
            (acc, item) => acc + (item.cartItemId === itemId ? newQuantity * item.unitPrice : item.totalPrice),
            0
        );
        setSubtotal(updatedSubtotal);

        // TODO: Send an API request to update the cart item quantity on the backend
    };

    const handleRemoveItem = (itemId) => {
        // Remove item locally
        setCartItems((prevItems) => prevItems.filter((item) => item.cartItemId !== itemId));

        // Recalculate subtotal
        const updatedSubtotal = cartItems
            .filter((item) => item.cartItemId !== itemId)
            .reduce((acc, item) => acc + item.totalPrice, 0);
        setSubtotal(updatedSubtotal);

        // TODO: Send an API request to remove the cart item from the backend
    };

    const handlePaymentSuccess = (details) => {
        if (!cartId) {
            console.error('Cart ID is not available for payment processing.');
            return;
        }

        // Create payment request payload
        const paymentPayload = {
            cartId: cartId,
            payerId: '1', // Hardcoded for now
            paymentStatus: 'approved', // Hardcoded for this example
            paymentDate: new Date().toISOString(), // Current date and time
            paymentMethod: 'paypal',
            paymentAmount: subtotal, // Use the calculated subtotal
            salesRequest: null,
        };

        // Send payment request to the backend
        axios
            .post('http://localhost:8081/api/payment/process-cart-payment', paymentPayload)
            .then((response) => {
                console.log('Payment processed successfully:', response.data);
                alert('Payment successful!');
            })
            .catch((error) => {
                console.error('Error processing payment:', error);
            });
    };

    return (
        <section className="shopping-cart">
            <div className="container">
                <h2 className="title">Shopping Cart</h2>

                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div className="cart-item" key={item.cartItemId}>
                            <div className="item-image">
                                <img
                                    src={item.productImage || 'https://via.placeholder.com/150'}
                                    alt={item.productName}
                                />
                            </div>
                            <div className="item-details">
                                <div className="item-header">
                                    <h5 className="item-title">{item.productName}</h5>
                                    <button
                                        className="remove-btn"
                                        onClick={() => handleRemoveItem(item.cartItemId)}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <p className="item-description">Size: {item.productSize}</p>
                                <div className="item-footer">
                                    <div className="quantity-control">
                                        <button
                                            className="quantity-btn"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    item.cartItemId,
                                                    Math.max(1, item.quantity - 1)
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <input
                                            type="text"
                                            value={item.quantity}
                                            className="quantity-input"
                                            readOnly
                                        />
                                        <button
                                            className="quantity-btn"
                                            onClick={() =>
                                                handleQuantityChange(
                                                    item.cartItemId,
                                                    item.quantity + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <h6 className="item-price">
                                        ${item.totalPrice.toFixed(2)}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty.</p>
                )}

                {/* Subtotal Section */}
                {cartItems.length > 0 && (
                    <div className="subtotal">
                        <h5 className="subtotal-title">Subtotal</h5>
                        <div className="subtotal-details">
                            <h6 className="subtotal-price">${subtotal.toFixed(2)}</h6>
                        </div>
                    </div>
                )}

                {/* PayPal Button Section */}
                {cartItems.length > 0 && (
                    <PayPalScriptProvider options={{ "client-id": "your_client-id" }}>
                        <PayPalButtons
                            style={{ layout: 'vertical' }}
                            amount={subtotal.toFixed(2)} // Total amount to be paid
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    console.log('Payment approved:', details);
                                    handlePaymentSuccess(details); // Call the payment success handler
                                });
                            }}
                            onError={(err) => {
                                console.error('PayPal payment error:', err);
                            }}
                        />
                    </PayPalScriptProvider>
                )}
            </div>
        </section>
    );
};

export default ShoppingCart;
