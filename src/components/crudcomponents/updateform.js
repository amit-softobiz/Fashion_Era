

'use client'
import React, { useState, useEffect } from 'react';
import * as api from './api';

const UpdateUserForm = ({ selectedProduct }) => {
    const [updatedProduct, setUpdatedProduct] = useState({
        title: '',
        image: '',
        // Add other fields as needed
    });

    useEffect(() => {
        if (selectedProduct) {
            setUpdatedProduct({
                title: selectedProduct.title,
                image: selectedProduct.image,
                // Set other fields here
            });
        }
    }, [selectedProduct]);

    const handleFieldChange = (fieldName, value) => {
        setUpdatedProduct(prevProduct => ({
            ...prevProduct,
            [fieldName]: value
        }));
    };

    const handleUpdate = async () => {
        try {
            // Call your API update method with updatedProduct
            await api.updateProduct(selectedProduct.id, updatedProduct);


            window.location.reload();
            
            // Perform any necessary actions after successful update
            
            // Clear the selected product and close the form
            // (You might want to pass a callback to reset the selectedProduct state)
        } catch (error) {
            // Handle error
        }
    };

    const handleCancel = () => {
        // Clear the selected product and close the form
        // (You might want to pass a callback to reset the selectedProduct state)
    };

    return (
        <div className="bg-white p-4 shadow-md">
            <h2>Edit Product</h2>
            <div className="mt-2">
                <label>Title</label>
                <input
                    type="text"
                    value={updatedProduct.title}
                    onChange={(e) => handleFieldChange('title', e.target.value)}
                />
            </div>
            <div className="mt-2">
                <label>Image URL</label>
                <input
                    type="text"
                    value={updatedProduct.image}
                    onChange={(e) => handleFieldChange('image', e.target.value)}
                />
            </div>
            {/* Add other fields here */}
            <div className="mt-4">
                <button onClick={handleUpdate}>Update</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default UpdateUserForm;
