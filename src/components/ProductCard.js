// components/ProductCard.js
// components/ProductCard.js

import React from 'react';
import styles from './ProductCard.module.css'; // Import the CSS module

const ProductCard = () => {
  return (
    <section className={styles['featured-products']}>
      <div className={styles['product-card']}>
        <img src="/images/product1.jpg" alt="Product 1" className={styles['product-image']} />
        <h3 className={styles['product-title']}>Product 1</h3>
        <p className={styles['product-price']}>Price: $19.99</p>
        <a href="/products/product-1" className={styles['product-link']}>View Details</a>
      </div>
    </section>
  );
};

export default ProductCard;

  