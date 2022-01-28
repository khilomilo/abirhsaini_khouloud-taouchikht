import React from "react";
import img from "../assets/image/ab-img2.png";
import "../style/About.scss";
import "../style/index.scss"
import Navigation from "../component/navigation";
import Footer from "../component/Footer";
function About() {
  return (
    <div className="about">
        <Navigation/>
      <div
        className="aboutTop"
        
      ></div>
      <div className="aboutBottom">
        <img className='photo' src={img} alt='granola' />
        <h1>welcome to youfirst</h1>
        <h3>We are a modern  restaurant in the center of the city</h3>
        <p>
        We would like to take this opportunity to welcome you at our restaurant. We are offering a warm, friendly atmosphere to share a meal with family and friends at any time of the day or evening. All of our dishes are made with quality fresh ingredients, it all starts with the hand-made dough and our toppings are sourced from the best local growers.
        </p>
      </div>
       <Footer/> 
    </div>
  );
}

export default About;