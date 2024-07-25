import Collections from "@/components/collection-cards";
import ContactForm from "@/components/Contact-form";
import Contact_info from "@/components/contact-info";
import HeroSection from "@/components/Hero-section";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/Header";
import Product_section from "@/components/products-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="w-full flex items-center justify-center my-3">
        <Header />
      </header>
        <section className="w-full" id="hero">
          <HeroSection />
        </section>
        <section className="w-full px-0 py-0" id="collection">
          <Collections />
        </section>
        <section className="w-full px-0 py-0" id="product">
          <Product_section />
        </section>
        <section className="w-full px-0 py-0" id="about-us">
        </section>
        <section className="w-full px-0 py-0" id="contact">
          <ContactForm />
          <Contact_info />
        </section>
      <Footer />
    </main>
  );
}
