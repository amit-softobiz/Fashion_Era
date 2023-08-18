"use client";

import { useQuery, gql } from '@apollo/client';
const GET_PRODUCTS = gql`
  query {
    products {
      id
      categories
      brand
      price
      color
      size
      tags
    }
  }
`;

function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {data.products.map((product: any) => (
          <li key={product.id}>
            <p>ID: {product.id}</p>
            <p>Categories: {product.categories}</p>
            <p>Brand: {product.brand}</p>
            <p>Price: {product.price}</p>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
            <p>Tags: {product.tags}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
