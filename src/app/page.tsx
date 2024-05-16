import FeaturedProducts from "@/components/landing-page/featured-products";
import Hero from "@/components/landing-page/hero";
import Location from "@/components/landing-page/location";
import ProductCombo from "@/components/landing-page/product-combo";
import WhyChooseUs from "@/components/landing-page/why-choose-us";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <ProductCombo /> 
      <Location />
    </>
  );
}
