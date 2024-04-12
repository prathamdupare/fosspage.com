import { Hero } from "@/components/Hero";
import { About } from "@/components/landing/About";
import { Footer } from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Footer />
    </div>
  );
};

export default page;
