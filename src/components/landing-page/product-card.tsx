import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  description: string;
  name: string;
  price: number;
}

function ProductCard(props : ProductCardProps) {
  const { image, name, description, price } = props;
  
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 px-1 gap-1">
        <div className="relative w-80 h-80">
        <Image src={image} alt={name} layout="fill" objectFit="contain" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="p-4">
          <h3 className="text-lg text-gray-900 font-bold mb-2 truncate">{name}</h3>
          <p className="text-sm text-gray-600 font-bold mb-2 truncate">{description}</p>
          <p className="text-red-700 font-bold">{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          <p className="mt-2 text-gray-600 text-xs">Mua ngay tại:</p>
          <div className="mt-1 flex justify-between">
          <a
            href='https://shopee.vn/highlands_officialstore#product_list' target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center bg-white text-orange-500 border border-orange-500 p-2 rounded hover:bg-orange-500 hover:text-white transition-colors duration-300">
            <span className='pr-0.5 text-sm'>Shopee</span>
            <div className="relative w-8 h-8">
              <Image src={ `/logo/shopee.png`} alt="shopee" layout="fill" objectFit="contain" />
            </div>
          </a>
          <a
            href='https://tiki.vn/cua-hang/highlands-coffee?t=product' target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-center bg-white text-blue-500 border border-blue-500 p-2 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
            <span className='pr-0.5 text-sm'>Tiki</span>
            <div className="relative w-8 h-8">
              <Image src={ `/logo/tiki.png`} alt="tiki" layout="fill" objectFit="contain" />
            </div>
          </a>
          <a 
            href='https://www.lazada.vn/shop/highlands-coffee/?path=index.htm' target="_blank" rel="noopener noreferrer" 
            className="flex items-center justify-center bg-white text-teal-500 border border-teal-500 p-2 rounded hover:bg-teal-500 hover:text-white transition-colors duration-300">
            <span className='pr-0.5 text-sm'>Lazada</span>
            <div className="relative w-8 h-8">
              <Image src={ `/logo/lazada.png`} alt="lazada" layout="fill" objectFit="contain" />
            </div>
          </a>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductCard;