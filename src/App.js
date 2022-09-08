import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="small-res">
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
