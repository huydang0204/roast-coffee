import Image from 'next/image';
import React from 'react';

function Hero() {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-40 h-40">
            <Image src="/highlands-logo.png" alt="Highlands Coffee Logo" layout="fill" objectFit="contain" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-center">Highlands Coffee</h1>
        <p className="text-xl mb-8 text-center">Thương hiệu bất nguồn từ cà phê Việt</p>
        <div className="flex justify-center">
          <button className="bg-white text-red-600 font-bold py-2 px-6 rounded">
            Khám phá
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;