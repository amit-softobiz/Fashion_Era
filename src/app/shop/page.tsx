// App.js
'use client'
import React, { useState } from 'react';
import Video from "@/cards/ShopCard/ShopCard"
// import './App.css'; // Import the CSS file for styling

function App() {
  // let Videos = 

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Function to filter videos based on selected filters
  const filteredVideos = Videos.filter((video) => {
    const price = parseInt(video.price);
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(video.color);
    const tagMatch = selectedTags.length === 0 || selectedTags.includes(video.tag);
    return price >= minPrice && price <= maxPrice && colorMatch && tagMatch;
  });


  
  return (
    <div className="w-full flex">
      {/* Sidebar - Width 30% */}
      <div className="w-3/10 bg-gray-200 p-4">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Men
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Women
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Kids
          </label>
        </div>

        <h2 className="text-xl font-semibold mb-4">Brands</h2>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Lee
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Wrangler
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Bata
          </label>
        </div>
        <h2 className="text-xl font-semibold mb-4 mt-6">Price Range</h2>
        <div className="flex items-center mb-4">
          <span className="mr-2">Min:</span>
          <input
            type="number"
            className="border rounded-md p-1 w-16 text-right"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
          />
          <span className="mx-2">to</span>
          <span className="mr-2">Max:</span>
          <input
            type="number"
            className="border rounded-md p-1 w-16 text-right"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
          />
        </div>
        <h2 className="text-xl font-semibold mb-4 mt-6">Colors</h2>
        <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Black
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Blue
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Red
          </label>
        <h2 className="text-xl font-semibold mb-4 mt-6">Tags</h2>
        <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            shirt
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            jeans
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            towel
          </label>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold w-full mt-4 hover:bg-blue-600"
        >
          Filter
        </button>
      </div>
      {/* Main Content - Width 70% */}
      <div className="w-6/10 p-4">
        <div className="flex flex-wrap justify-between">
          {Videos.map((video, index) => (
            <div key={index} className="w-1/4 p-2">
              <Video
                image={video.image}
                title={video.title}
                description={video.description}
                price={video.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
