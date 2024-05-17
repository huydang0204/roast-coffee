import Image from 'next/image';
import React from 'react';
import Dropdown from '../dropdown';

const OPTIONS = [ "Về chúng tôi", "Dịch vụ", "Nghề nghiệp", "Liên hệ" ];

function Hero() {
  return (
    <section className="bg-red-600 text-white py-16">
      <div className="container px-1 mx-auto flex justify-between">
        <div className="flex items-center justify-center">
          <div className="relative w-40 h-40">
            <Image src="/highlands-logo.png" alt="Highlands Coffee Logo" layout="fill" objectFit="contain" />
          </div>
          <div className="ml-8">
            <h1 className="text-4xl font-bold mb-4 text-center">Highlands Coffee</h1>
            <p className="text-xl text-center">Thương hiệu bắt nguồn từ cà phê Việt</p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <button className="bg-white text-red-600 font-bold py-2 px-6 rounded">
            Khám phá
          </button>
        </div> */}

        <div className="flex flex-col justify-center">
          <Dropdown options={OPTIONS} />
        </div>
      </div>
    </section>
  );
};

export default Hero;