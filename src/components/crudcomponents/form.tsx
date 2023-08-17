
"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as api from './api';

const CreateUserForm = () => {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    
    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await api.createProduct({
               
                title: data.title,
                image: data.image,
              
            });

            console.log('User created:', response);
            window.location.reload();
        
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };
   
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const productData = {
//       title: title,
//       image: image
//     };

//     try {
//       // Use the createProduct function from the API to create the product
//       const response = await api.createProduct(productData);
//       console.log('Product created:', response);

//       // Reset the form fields after successful submission
//       setTitle('');
//       setImage('');
//     } catch (error) {
//       console.error('Error creating product:', error);
//     }
//   };

    

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Create User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            
         

                <div className="mb-3">
                    <label className="block text-gray-600">Title</label>
                    <input
                        type="text"
                        {...register('title', { required: true })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    {errors.title && <span className="text-red-500">Title is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block text-gray-600">Image URL</label>
                    <div className="mb-3">
                    <label className="block text-gray-600">Image URL</label>
                    <input
                        type="text"
                        {...register('image', { required: true })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    {errors.image && <span className="text-red-500">Image URL is required</span>}
                </div>
        
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create User
                </button>
            </form>
        </div>
    );
};

export default CreateUserForm;
