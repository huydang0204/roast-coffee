import Image from 'next/image';
import React from 'react';

function ContentCard(props: { title: string, content: string, imgUrl: string }) {
  return (
    <div>
      <div className="relative w-full h-40 mr-4 mb-2">
        <Image src={ props.imgUrl } alt="Nguồn gốc" layout="fill" objectFit="cover" />
      </div>
        <h3 className="text-xl font-bold mb-4">{ props.title }</h3>
          <p>{ props.content }</p>
      </div>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Tại sao lại chọn chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContentCard imgUrl='/wcs_nguongoc.png' title="Nguồn gốc" content="Highlands Coffee được thành lập bởi một nhóm bạn gồm người Việt Nam và một số cổ đông nước ngoài. Highlands Coffee được sinh ra với khát vọng nâng tầm cà phê Việt Nam và đưa thương hiệu cà phê Việt ra thế giới." />
          <ContentCard imgUrl='/wcs_dichvu.png' title="Dịch vụ" content="Highlands Coffee là không gian của chúng mình nên mọi thứ ở đây đều vì sự thoải mái của chúng mình. Đừng giữ trong lòng, hãy chia sẻ với chúng mình điều bạn mong muốn để cùng nhau giúp Highlands Coffee trở nên tuyệt vời hơn." />
          <ContentCard imgUrl='/wcs_khonggian.png' title="Không gian" content="Highlands Coffee đã tạo nên sự khác biệt bằng không gian hiện đại và đa chức năng. Quý khách có thể đến đây để trải nghiệm không gian đẹp, thưởng thức cà phê hoặc làm việc tại đây mỗi ngày." />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;