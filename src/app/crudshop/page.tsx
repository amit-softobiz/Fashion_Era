

'use client'
import React, { useEffect, useState } from 'react';
import CreateUserForm from './form';

const Product = async () => {
    const data = await fetch("http://localhost:4000/shopproducts");
    const newdata = await data.json();
    return newdata;
}

const FetchProduct = () => {
   
    const [products, setProducts] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const handleClick = () => {
      setShowForm(true);
    };
    const deleteShopProductHandler = async (productId) => {
        await fetch(`http://localhost:4000/shopproducts/${productId}`, { method: 'DELETE' });
    
        setProducts(products.filter(product => product.id !== productId));
    }
    
    

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await Product();
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {products.map((singleProduct) => (
                <div key={singleProduct.id} className="bg-white p-4 shadow-md">
                 <div onClick={() => deleteShopProductHandler(singleProduct.id)} className="cursor-pointer text-red-500 font-bold">X</div>

                    <img src={singleProduct.image} alt={singleProduct.title} className="w-full h-auto" />
                    <div className="mt-2 font-semibold">{singleProduct.title}</div>
                </div>
            ))}
             <button onClick={handleClick}>add new</button>
      {showForm && <CreateUserForm />}
        </div>
    );
};

export default FetchProduct;
