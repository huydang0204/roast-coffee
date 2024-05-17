import FeaturedProducts from "@/components/landing-page/featured-products";
import Hero from "@/components/landing-page/hero";
import Location from "@/components/landing-page/location";
import ProductCombo from "@/components/landing-page/product-combo";
import SocialMedia from "@/components/landing-page/social-media";
import WhyChooseUs from "@/components/landing-page/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProductCombo /> 
      <Location />
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <p>&copy; 2023 Highlands Coffee. All rights reserved.</p>
          <SocialMedia />
        </div>
      </footer>
    </>
  );
}
