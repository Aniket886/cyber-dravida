import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Courses from "@/components/Courses";
import Stats from "@/components/Stats";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import ChatBot from "@/components/ChatBot";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background circuit-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionWrapper><About /></SectionWrapper>
      <SectionWrapper><Services /></SectionWrapper>
      <SectionWrapper><Courses /></SectionWrapper>
      <SectionWrapper><Stats /></SectionWrapper>
      <SectionWrapper><Events /></SectionWrapper>
      <SectionWrapper><Team /></SectionWrapper>
      <SectionWrapper><Blog /></SectionWrapper>
      <SectionWrapper><Contact /></SectionWrapper>
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Index;
