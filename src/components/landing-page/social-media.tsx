import React from 'react';
import Image from 'next/image';

function SocialMedia() {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <p className="text-white text-xs">Kết nối với chúng tôi:</p>
      </div>
      <a href="https://www.facebook.com/highlandscoffeevietnam" target="_blank" rel="noopener noreferrer">
        <div className='relative w-8 h-8'>
        <Image src="/logo/facebook.png" alt="Facebook" layout="fill" objectFit="contain" />
        </div>
      </a>
      <a href="https://www.tiktok.com/@highlandscoffeevietnam" target="_blank" rel="noopener noreferrer">
        <div className='relative w-8 h-8'>
        <Image src="/logo/tiktok.png" alt="TikTok" layout="fill" objectFit="contain" />
        </div>
      </a>
      <a href="https://www.instagram.com/highlandscoffeevietnam" target="_blank" rel="noopener noreferrer">
        <div className='relative w-8 h-8'>
        <Image src="/logo/instagram.png" alt="Instagram" layout="fill" objectFit="contain" />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;