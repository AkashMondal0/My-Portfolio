import React from "react";
import Hero from "@/components/hero";
import Skills from "@/components/skill";
import Contact from "@/components/contact";


const Home: React.FC = () => {

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Skills />
      <Contact />
    </div>
  )
}


export default Home;