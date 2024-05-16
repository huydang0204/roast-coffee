import React from 'react';
import ProductCard from './product-card';

function FeaturedProducts() {
  const products = [
    { id: 1, image: '/products/truyen-thong-1kg.png', name: 'Cà phê rang xay truyền thống 1Kg', price: 275000, description: '80% Robusta, 20% Arabica' },
    { id: 2, image: '/products/truyen-thong-200g.jpeg', name: 'Cà phê rang xay truyền thống 200g', price: 59000, description: '80% Robusta, 20% Arabica' },
    { id: 3, image: '/products/moka-200g.jpeg', name: 'Cà phê rang xay Moka 200g', price: 85000, description: '100% Moka' },
    { id: 4, image: '/products/sanh-dieu-200g.jpg', name: 'Cà phê rang xay Sành điệu 200g', price: 59000, description: '70% Robusta, 30% Arabica' },
    { id: 5, image: '/products/culi-200g.jpg', name: 'Cà phê rang xay Culi 200g', price: 59000, description: '100% Culi' },
    { id: 6, image: '/products/full-city-roast-1kg.jpg', name: 'Cà phê rang xay Full City 1Kg', price: 425000, description: '70% Robusta, 30% Arabica' },
    { id: 7, image: '/products/di-san-200g.jpg', name: 'Cà phê rang xay Di sản 200g', price: 58000, description: '100% Robusta' },
    { id: 8, image: '/products/hoa-tan.jpg', name: 'Cà phê hoà tan 3 trong 1 (20 gói)', price: 42000, description: 'Đường mịn: 40%, Bột kem tách bơ: 37%, Cà phê hòa tan: 13%, hương liệu tổng hợp' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} image={product.image} name={product.name} description={product.description} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;