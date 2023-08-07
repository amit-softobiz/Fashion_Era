"use client";
import DealOfTheWeek from "@/components/DealOfTheWeek";
import ProductCard from "@/components/ProductCard";
import Banner from "@/components/banner";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { number } from "yup";

export default async function HomePage() {
  const productsData = await axios.get("http://localhost:4000/productss");
  const slidesData = await axios.get("http://localhost:4000/slides");
  const banner = await axios.get("http://localhost:4000/banner");

  interface SlicedData{
    id:number,
    img:string,
    title:string

  }

  const slides = slidesData.data.map((slide:SlicedData, index:number) => (
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
      {banner.data.map((bannerItem:any,index:any) => (
          <Banner
          key={index}
          imageSrc={bannerItem.img}
          title={bannerItem.title}
        />
        ))}
      </div>

<div className="flex">

  <div className="flex-2">
    <img src="https://cdn.shopify.com/s/files/1/0491/3204/4455/products/BJ0A2700_360x.jpg?v=1665779449" alt="First Image" className="w-full h-auto"/>
  </div>


  <div className="flex-1">
  <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        className="h-50"
      >
        {slides}
      </Carousel>
  </div>
</div>



      
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
        {productsData.data.map((product:any, index:any) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
      <div className="flex">


  <div className="flex-1">
  <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showArrows={false}
        interval={3000}
        className="h-50"
      >
        {slides}
      </Carousel>
  </div>
  
  <div className="flex-2">
    <img src="https://cdn.shopify.com/s/files/1/0491/3204/4455/products/BJ0A2700_360x.jpg?v=1665779449" alt="First Image" className="w-full h-auto"/>
  </div>

</div>

      <DealOfTheWeek />
    </>
  );
}

