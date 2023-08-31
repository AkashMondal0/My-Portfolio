import Header from "@/components/header";
import React from "react";
import Hero from "@/components/hero";
import SkillsShow from "@/components/skill";
import Footer from "@/components/footer";
import Contact from "@/components/contact";


const Home: React.FC = () => {

  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <SkillsShow />
      <Contact />
      <Footer />
    </div>
  )
}


export default Home;