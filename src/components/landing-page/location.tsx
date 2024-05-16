import React from 'react';

function Location() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681714586!2d106.70195611428697!3d10.773291492324395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702f4d%3A0x8c9e0b2e2e6e6f2a!2sHighlands%20Coffee!5e0!3m2!1sen!2s!4v1623347999194!5m2!1sen!2s`;

  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Tìm quán cà phê</h2>
      <div className="mt-2 max-w-lg mx-auto">
        <form className="flex items-center">
          <input
            type="text"
            placeholder="Nhập địa chỉ hoặc thành phố"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
          >
            Tìm kiếm
          </button>
        </form>
        <div className="mt-8">
          <div className="max-w-lg mx-auto">
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-semibold mb-2">Trụ sở văn phòng</p>
              <p className="text-gray-600">127 Nguyễn Cơ Thạch, An Lợi Đông, Q.2, Tp. Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Location;