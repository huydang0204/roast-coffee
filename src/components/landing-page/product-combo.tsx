import Image from 'next/image';
import React from 'react';

function ProductCombo() {
  return (
    <section className="bg-yellow-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Khuyến mãi</h2>
        <div className="flex flex-col justify-center items-center">
          <Image src="/products/km-1.png" width={1200} height={400} alt="Combo-1" />
          <Image src="/products/km-2.jpeg" width={1200} height={400} alt="Combo-2" />
        </div>
      </div>
    </section>
  );
};

export default ProductCombo;