import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const SalesTable = () => {
    const [data, setData] = useState([
        { sales_id: 1, product_id: 101, quantity: 2, sale_date: "2024-11-01", unit_price: 50, total_price: 100 },
        { sales_id: 2, product_id: 102, quantity: 1, sale_date: "2024-11-10", unit_price: 30, total_price: 30 },
    ]);

    const [selectedRow, setSelectedRow] = useState(null); // For Edit pop-up management
    const [showCreateForm, setShowCreateForm] = useState(false); // For Create form
    const [newRow, setNewRow] = useState({
        sales_id: "",
        product_id: "",
        quantity: "",
        sale_date: "",
        unit_price: "",
        total_price: "",
    });

    // Open the edit pop-up
    const openPopup = (id) => {
        setSelectedRow(id);
    };

    // Close the edit pop-up
    const closePopup = () => {
        setSelectedRow(null);
        setShowCreateForm(false);
    };

    // Handle input changes in the Create form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRow({ ...newRow, [name]: value });
    };

    // Add the new row to the table
    const handleCreateRow = () => {
        const newEntry = {
            ...newRow,
            sales_id: parseInt(newRow.sales_id),
            product_id: parseInt(newRow.product_id),
            quantity: parseInt(newRow.quantity),
            unit_price: parseFloat(newRow.unit_price),
            total_price: parseFloat(newRow.total_price),
        };
        setData([...data, newEntry]);
        setNewRow({
            sales_id: "",
            product_id: "",
            quantity: "",
            sale_date: "",
            unit_price: "",
            total_price: "",
        });
        setShowCreateForm(false);
    };

    // Delete the selected row
    const handleDelete = () => {
        const updatedData = data.filter((row) => row.sales_id !== selectedRow);
        setData(updatedData);
        closePopup();
    };

    return (
        <div className="app-container" style={{ display: "flex" }}>
            {/* Admin Panel Sidebar */}
            <div className="sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li>Dashboard</li>
                    <li>Inventory</li>
                    <li>Sales</li>
                    <li>Reports</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="content" style={{display: "flex", flexDirection: "column" }}>
                <h1>Sales Table</h1>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th>Sales ID</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Sale Date</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.sales_id}>
                                <td>{row.sales_id}</td>
                                <td>{row.product_id}</td>
                                <td>{row.quantity}</td>
                                <td>{row.sale_date}</td>
                                <td>{row.unit_price}</td>
                                <td>{row.total_price}</td>
                                <td>
                                    <button className="edit-btn" onClick={() => openPopup(row.sales_id)}>
                                        <FaEdit /> Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pop-up for Edit Options */}
                {selectedRow && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>Edit Options</h3>
                            <p>Actions for Sales ID: {selectedRow}</p>
                            <div className="popup-actions">
                                <button className="add-btn" onClick={() => setShowCreateForm(true)}>
                                    <FaPlus /> Add New Row
                                </button>
                                <button className="delete-btn" onClick={handleDelete}>
                                    <FaTrash /> Delete Row
                                </button>
                            </div>
                            <button className="close-btn" onClick={closePopup}>
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Create Form Pop-up */}
                {showCreateForm && (
                    <div className="popup">
                        <div className="popup-content">
                            <h3>Create New Row</h3>
                            <form>
                                <div className="form-group">
                                    <label>Sales ID:</label>
                                    <input
                                        type="number"
                                        name="sales_id"
                                        value={newRow.sales_id}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Product ID:</label>
                                    <input
                                        type="number"
                                        name="product_id"
                                        value={newRow.product_id}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Quantity:</label>
                                    <input
                                        type="number"
                                        name="quantity"
                                        value={newRow.quantity}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Sale Date:</label>
                                    <input
                                        type="date"
                                        name="sale_date"
                                        value={newRow.sale_date}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Unit Price:</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="unit_price"
                                        value={newRow.unit_price}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Total Price:</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        name="total_price"
                                        value={newRow.total_price}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </form>
                            <div className="popup-actions">
                                <button className="confirm-btn" onClick={handleCreateRow}>Enter</button>
                                <button className="cancel-btn" onClick={closePopup}>Cancel</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SalesTable;
