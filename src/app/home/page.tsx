"use client";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/banner";
import axios from "axios";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Example JSON data for products


export default async function HomePage() {
  const productsData = await axios.get("http://localhost:4000/productss");
   const slides = [
    <div key={1}>
      
      <img src="https://media.istockphoto.com/id/506317910/photo/beautiful-little-girl-model-wearing-a-leopard-dress-and-sunglass.jpg?s=1024x1024&w=is&k=20&c=AYlxOvgD6IS6z-dCtAKLJh2qefNI1XJkPG52TS1Pa8g=" alt="Slide 1" />
    </div>,
        <div key={2}>
      
        <img src="https://img.freepik.com/free-photo/full-length-portrait-happy-excited-woman-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated-green-wall_231208-2678.jpg?w=740&t=st=1690612793~exp=1690613393~hmac=2e9f010480de8bee6686f6d2ddd035fe7c3f54d6365f5aef064d3f73540d39c1" alt="Slide 1" />
      </div>,
    // Add more slides here
  ];
  return (
    <>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        className="w-2/5 mx-auto mt-16"
      >
        {slides}
      </Carousel>
      <div className="flex flex-wrap justify-center">
      <Banner imageSrc="https://preview.colorlib.com/theme/fashi/img/banner-1.jpg.webp" title="Men" />
      <Banner imageSrc="https://preview.colorlib.com/theme/fashi/img/banner-2.jpg.webp" title="Women" />
      <Banner imageSrc="https://preview.colorlib.com/theme/fashi/img/banner-3.jpg.webp" title="Kids" />
    </div>

    <section className="women-banner spad">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="product-large set-bg" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0491/3204/4455/products/BJ0A2700_360x.jpg?v=1665779449')" }}>
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
        <p className="text-lg">Explore our amazing products and start shopping!</p>
        <a href="/products" className="shop-now-btn mt-4 inline-block px-6 py-3 text-white bg-pink-500 rounded-lg text-lg hover:bg-pink-600 transition duration-300">
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

    <DealOfTheWeek/>
    </>
  );
}
