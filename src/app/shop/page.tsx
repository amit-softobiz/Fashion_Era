// App.js
import React from 'react';
import Video from "@/cards/ShopCard/ShopCard"
// import './App.css'; // Import the CSS file for styling

function App() {
  let Videos = [
    {
      title: "This is react.js",
    image: `https://preview.colorlib.com/theme/fashi/img/products/product-1.jpg.webp`,
      price: "5k",
      description:"sakgghf"
    },
    

    {
        title: "This is react.js",
      image: `https://preview.colorlib.com/theme/fashi/img/products/product-2.jpg.webp`,
        price: "5k",
        description:"sakgghf"
      },
      {
        title: "This is react.js",
      image: `https://preview.colorlib.com/theme/fashi/img/products/product-3.jpg.webp`,
        price: "5k",
        description:"sakgghf"
      },
      {
        id:1,
        title: "This is react.js",
      image: `https://preview.colorlib.com/theme/fashi/img/products/product-4.jpg.webp`,
        price: "5k",
        description:"sakgghf"
      },
    

  ];
  
  return (
    <div className="videos-container">
          {Videos.map((video, index) => (
        <Video key={index} image={video.image} title={video.title} description={video.description} price={video.price} />
      ))}


    </div>
  );
}

export default App;
