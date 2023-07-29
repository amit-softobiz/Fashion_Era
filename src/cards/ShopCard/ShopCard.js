// Video.js
import React from 'react';

const Video = ({ title, description, image, price,id }) => {
  return (
    <div className="video-container bg-white rounded-lg shadow-md p-4 mx-2 my-4 max-w-xs">
      {/* <img src="https://picsum.photos/200/300" alt="" className="rounded-lg" /> */}
      <div className="video-info mt-2">
        <img src={image}></img>
        <h1 className="text-xl font-bold">{title}</h1>
        <div className="text-gray-600">{description} description</div>
        <div className="text-blue-500">{price} price</div>
        {/* <div className="text-gray-600">{image}</div> */}
      </div>
    </div>
  );
};

export default Video;
