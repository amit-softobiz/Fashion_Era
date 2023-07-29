// components/ProductCard.js
// components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css'; // Import the CSS module

const ProductCard = ({image,name,price}) => {
  return (
    <section className={styles['featured-products']}>
      <div className={styles['product-card']}>
        <img src={image} alt="Product 1" className={styles['product-image']} />
        <h3 className={styles['product-title']}>{name}</h3>
        <p className={styles['product-price']}>Price:{price}</p>
        {/* <a href="/products/product-1" className={styles['product-link']}>View Details</a> */}
      </div>
    </section>
  );
};

export default ProductCard;

  