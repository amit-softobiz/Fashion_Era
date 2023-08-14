
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';

const CreateUserForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // You can handle form submission here, like sending the data to an API
        console.log(data);
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Create User</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="block text-gray-600">Name</label>
                    <input
                        type="text"
                        {...register('name', { required: true })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    {errors.name && <span className="text-red-500">Name is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block text-gray-600">Email</label>
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="mb-3">
                    <label className="block text-gray-600">Password</label>
                    <input
                        type="password"
                        {...register('password', { required: true })}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    {errors.password && <span className="text-red-500">Password is required</span>}
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
