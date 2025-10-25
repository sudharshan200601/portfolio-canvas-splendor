import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Hackathons from "@/components/Hackathons";
import HackerRank from "@/components/HackerRank";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <Certificates />
      <Hackathons />
      <HackerRank />
      <Footer />
    </div>
  );
};

export default Index;
