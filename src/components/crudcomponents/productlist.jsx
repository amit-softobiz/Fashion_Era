

'use client'
import React, { useEffect, useState } from 'react';
import CreateUserForm from './form';
import UpdateUserForm from './updateform';
import * as api from './api';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await api.fetchProducts();
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    const deleteShopProductHandler = async (productId) => {
        await api.deleteUser(productId);
        setProducts(products.filter(product => product.id !== productId));
    };

    const handleClick = () => {
        setShowCreateForm(true);
        setShowUpdateForm(false); // Close the update form when clicking "Add New"
    };

    const handleUpdate = (id) => {
        const selected = products.find(product => product.id === id);
        setSelectedProduct(selected);
        setShowUpdateForm(true);
        setShowCreateForm(false); // Close the create form when clicking "Update"
    };
    
    return (
        <>
        <button
        onClick={handleClick}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4"
    >
        Add New
    </button>
    {showCreateForm && <CreateUserForm />}
    {showUpdateForm && <UpdateUserForm selectedProduct={selectedProduct} />}
        <div className="grid grid-cols-3 gap-4 p-4">
            {products.map((singleProduct) => (
                <div key={singleProduct.id} className="bg-white p-4 shadow-md rounded-lg">
                    <div onClick={() => deleteShopProductHandler(singleProduct.id)} className="cursor-pointer text-red-500 font-bold">X</div>
                    <img src={singleProduct.image} alt={singleProduct.title} className="w-full h-auto" />
                    <div className="mt-2 font-semibold">{singleProduct.title}</div>
                    <button
                        onClick={() => handleUpdate(singleProduct.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg mt-2"
                    >
                        Update
                    </button>
                </div>
            ))}
        
        </div>


        </>
    );
};

export default ProductList;
