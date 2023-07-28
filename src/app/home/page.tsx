"use client";
import ProductCard from '@/components/ProductCard';
export default function homePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our eCommerce Website</h1>
            <p>Explore our amazing products and start shopping!</p>
            <a href="/products" className="shop-now-btn">
              Shop Now
            </a>
          </div>
        </section>

      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </main>

      <style jsx>{`
        /* Add your specific home page styles here */
        .hero {
          background-image: url("/images/hero-image.jpg");
          background-size: cover;
          background-position: center;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .hero-content {
          text-align: center;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .hero p {
          font-size: 1.5rem;
          margin-bottom: 2rem;
        }

        .shop-now-btn {
          display: inline-block;
          padding: 12px 24px;
          font-size: 1.2rem;
          background-color: #ff3366;
          color: #fff;
          border: none;
          border-radius: 4px;
          text-decoration: none;
          transition: background-color 0.3s;
        }

        .shop-now-btn:hover {
          background-color: #e8005e;
        }

        .featured-products {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .product-card {
          margin: 20px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 240px;
          text-align: center;
        }

        .product-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .product-card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .product-card p {
          font-size: 1rem;
          margin-bottom: 10px;
        }

        .product-link {
          display: inline-block;
          padding: 8px 16px;
          font-size: 1rem;
          background-color: #333;
          color: #fff;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        .product-link:hover {
          background-color: #555;
        }
      `}</style>
    </>
  );
}
