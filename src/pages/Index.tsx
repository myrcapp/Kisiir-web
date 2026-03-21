import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Families from "@/components/landing/Families";
import AppDetail from "@/components/landing/AppDetail";
import Testimonials from "@/components/landing/Testimonials";
import B2B from "@/components/landing/B2B";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import CustomCursor from "@/components/landing/CustomCursor";
import LoadingScreen from "@/components/landing/LoadingScreen";

const Index = () => (
  <>
    <LoadingScreen />
    <CustomCursor />
    <Navbar />
    <Hero />
    <Marquee />
    <Features />
    <HowItWorks />
    <Families />
    <AppDetail />
    <Testimonials />
    <B2B />
    <FinalCTA />
    <Footer />
  </>
);

export default Index;
