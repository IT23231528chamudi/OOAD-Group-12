import React, { useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const AdminPanel = () => {
    // Dummy data for the inventory table
    const [inventory, setInventory] = useState([
        {
            Product_ID: 1,
            Product_Name: "Pillow",
            Price: 20.99,
            Product_Size: "Medium",
            Category_ID: 101,
            Stock_Quantity: 50,
        },
        {
            Product_ID: 2,
            Product_Name: "Duvet",
            Price: 45.99,
            Product_Size: "Large",
            Category_ID: 102,
            Stock_Quantity: 30,
        },
    ]);

    // State for the selected row and pop-up visibility
    const [selectedRow, setSelectedRow] = useState(null);
    const [showCreateForm, setShowCreateForm] = useState(false);

    // State for new row data
    const [newRow, setNewRow] = useState({
        Product_ID: "",
        Product_Name: "",
        Price: "",
        Product_Size: "",
        Category_ID: "",
        Stock_Quantity: "",
    });

    // Open the edit pop-up
    const openPopup = (id) => {
        setSelectedRow(id);
    };

    // Close the pop-up
    const closePopup = () => {
        setSelectedRow(null);
        setShowCreateForm(false);
    };

    // Handle input change for the create form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRow({ ...newRow, [name]: value });
    };

    // Add the new row to the inventory
    const handleCreateRow = () => {
        const newEntry = {
            ...newRow,
            Product_ID: parseInt(newRow.Product_ID),
            Price: parseFloat(newRow.Price),
            Stock_Quantity: parseInt(newRow.Stock_Quantity),
            Category_ID: parseInt(newRow.Category_ID),
        };
        setInventory([...inventory, newEntry]);
        setNewRow({
            Product_ID: "",
            Product_Name: "",
            Price: "",
            Product_Size: "",
            Category_ID: "",
            Stock_Quantity: "",
        });
        setShowCreateForm(false);
    };

    // Delete a row
    const handleDeleteRow = () => {
        const updatedInventory = inventory.filter((item) => item.Product_ID !== selectedRow);
        setInventory(updatedInventory);
        closePopup();
    };

    return (
        <div className="admin-panel">
            <div className="sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li>Dashboard</li>
                    <li>Inventory</li>
                    <li>Sales</li>
                    <li>Reports</li>
                </ul>
            </div>
            <div className="content" style={{ display: "flex", flexDirection: "column" }}>
                <h1>Inventory Management</h1>
                <div className="table-container">
                    <table className="inventory-table">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Product Size</th>
                                <th>Category ID</th>
                                <th>Stock Quantity</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map((item) => (
                                <tr key={item.Product_ID}>
                                    <td>{item.Product_ID}</td>
                                    <td>{item.Product_Name}</td>
                                    <td>{item.Price.toFixed(2)}</td>
                                    <td>{item.Product_Size}</td>
                                    <td>{item.Category_ID}</td>
                                    <td>{item.Stock_Quantity}</td>
                                    <td>
                                        <button className="edit-btn" onClick={() => openPopup(item.Product_ID)}>
                                            <FaEdit /> Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pop-up for edit options */}
            {selectedRow && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Edit Options</h3>
                        <p>Choose an action for Product ID: {selectedRow}</p>
                        <div className="popup-actions">
                            <button className="add-btn" onClick={() => setShowCreateForm(true)}>
                                <FaPlus /> Add New Row
                            </button>
                            <button className="delete-btn" onClick={handleDeleteRow}>
                                <FaTrash /> Delete
                            </button>
                        </div>
                        <button className="close-btn" onClick={closePopup}>
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* Pop-up for create form */}
            {showCreateForm && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Create New Row</h3>
                        <form>
                            <div className="form-group">
                                <label>Product ID:</label>
                                <input
                                    type="number"
                                    name="Product_ID"
                                    value={newRow.Product_ID}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Name:</label>
                                <input
                                    type="text"
                                    name="Product_Name"
                                    value={newRow.Product_Name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    name="Price"
                                    value={newRow.Price}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Size:</label>
                                <input
                                    type="text"
                                    name="Product_Size"
                                    value={newRow.Product_Size}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Category ID:</label>
                                <input
                                    type="number"
                                    name="Category_ID"
                                    value={newRow.Category_ID}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Stock Quantity:</label>
                                <input
                                    type="number"
                                    name="Stock_Quantity"
                                    value={newRow.Stock_Quantity}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                        <div className="popup-actions">
                            <button className="confirm-btn" onClick={handleCreateRow}>
                                Enter
                            </button>
                            <button className="cancel-btn" onClick={closePopup}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminPanel;
