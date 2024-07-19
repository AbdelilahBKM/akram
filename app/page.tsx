import Collections from "@/components/collection-cards";
import HeroSection from "@/components/Hero-section";
import Inspirations from "@/components/Inspiration";
import Product_section from "@/components/products-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <Collections />
      <Product_section />
      <Inspirations />
    </main>
  );
}
