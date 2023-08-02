"use client";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/banner";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default async function HomePage() {
  const productsData = await axios.get("http://localhost:4000/productss");
  const slidesData = await axios.get("http://localhost:4000/slides");
  const banner = await axios.get("http://localhost:4000/banner");

  const slides = slidesData.data.map((slide, index) => (
    <div key={index}>
      <img src={slide.img} alt={slide.title} />
    </div>
  ));

  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        className="h-600"
      >
        {slides}
      </Carousel>
      
      <div className="flex flex-wrap justify-center">
      {banner.data.map((bannerItem, index) => (
          <Banner
          imageSrc={bannerItem.img}
          title={bannerItem.title}
        />
        ))}
      </div>

      <section className="women-banner spad">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="product-large set-bg"
                style={{
                  backgroundImage:
                    "url('https://cdn.shopify.com/s/files/1/0491/3204/4455/products/BJ0A2700_360x.jpg?v=1665779449')",
                }}
              >
                <h2>Women’s</h2>
                <a href="#">Discover More</a>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1">
              <div className="filter-control">
                <ul>
                  <li className="active">Clothings</li>
                  <li>HandBag</li>
                  <li>Shoes</li>
                  <li>Accessories</li>
                </ul>
              </div>
              <div className="product-slider owl-carousel owl-loaded owl-drag">
                {/* Owl carousel items go here */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Welcome to Our eCommerce Website</h1>
        <p className="text-lg">
          Explore our amazing products and start shopping!
        </p>
        <a
          href="/products"
          className="shop-now-btn mt-4 inline-block px-6 py-3 text-white bg-pink-500 rounded-lg text-lg hover:bg-pink-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>

      <div className="flex flex-wrap justify-center">
        {productsData.data.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>

      <DealOfTheWeek />
    </>
  );
}
