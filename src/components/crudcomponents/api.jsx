
'use client'
import axios from "axios";

// api.js
// import axios from 'axios';

export const fetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:4000/shopproducts");
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};


export const deleteUser = async (productId) => {
    await axios.delete(`http://localhost:4000/shopproducts/${productId}`);
};

export const createProduct = async (productData) => {
    try {
        const response = await axios.post('http://localhost:4000/shopproducts', productData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 201) {
            return response.data;
        } else {
            throw new Error('Failed to create product');
        }
    } catch (error) {
        console.error('An error occurred while creating product:', error);
        throw error;
    }
};



export const updateProduct = async (productId, updatedData) => {
    try {
        const response = await axios.put(`http://localhost:4000/shopproducts/${productId}`, updatedData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to update product');
        }
    } catch (error) {
        console.error('An error occurred while updating product:', error);
        throw error;
    }
};
