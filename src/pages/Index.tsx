import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProcessSection from "@/components/ProcessSection";
import FactoryVideo from "@/components/FactoryVideo";
import TrustBadges from "@/components/TrustBadges";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandIntro />
        <TrustBadges />
        <WhyChooseUs />
        <FeaturedProducts />
        <ProcessSection />
        <FactoryVideo />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
