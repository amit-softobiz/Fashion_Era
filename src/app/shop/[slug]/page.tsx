

'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
// import Video from "@/cards/ShopCard/ShopCard";

interface Video {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [video, setVideo] = useState<Video | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/shopproducts/${params.slug}`)
      .then(response => {
        setVideo(response.data);
      })
      .catch(error => {
        console.log("Error fetching video:", error);
      });
  }, [params.slug]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="bg-white shadow-md p-4 rounded-lg cursor-pointer">
        <img src={video.image} alt={video.title} className="w-full h-72 object-cover" />
        <h2 className="text-xl font-semibold mt-2">{video.title}</h2>
        <p className="text-gray-500">{video.description}</p>
        <p className="mt-2 font-bold text-purple-600">${video.price}</p>
      
          <div className="text-center mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600">
              View Details
            </button>
          </div>
      
      </div>
    </div>
  );
}
