// components/Banner.tsx
import React from 'react';

interface BannerProps {
  imageSrc: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageSrc, title }) => {
  return (
    <div className="lg:w-1/4">
      <div className="bg-gray-100 rounded-lg p-4">
        <img src={imageSrc} alt="" className="w-full rounded-lg mb-4" />
        <div className="text-center">
          <h4 className="text-xl font-semibold">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
