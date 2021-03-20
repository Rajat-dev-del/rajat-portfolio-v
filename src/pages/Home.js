import React from "react";
import Header from "../include/Header";
import Footer from "../include/Footer";
import BannerProfile from "../component/BannerProfile.js";
import Work from "../component/Work.js";
import Social from "../component/Social.js";



 
export default function Home() {
 
    return (
      <div className="wrapper">
        <Header />
        <BannerProfile/>
        <Work/>
        <Social/>
        <Footer />
      </div>
    );
  
}
