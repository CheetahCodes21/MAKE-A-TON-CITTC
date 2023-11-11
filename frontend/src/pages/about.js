import React, { useEffect, useState } from "react";
import nobg from "../Assets/emblem/fodieab.png";
// import nobg1 from "../Assets/emblem/fodieab-nobg.png";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

// import { Parallax } from "react-parallax";

function About() {
  const [textOpacity, setTextOpacity] = useState(0);

  const animateText = () => {
    let opacity = 0;
    const timer = setInterval(() => {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      setTextOpacity(opacity);
      opacity += 0.02; 
    }, 20); 
  };

  useEffect(() => {
    animateText(); 
  }, []);

  return (
    <div style={{overflowX:'hidden'}}>
      <Navbar />
      {/* <Parallax
        bgImage={nobg}
        bgImageAlt="Foodie"
        strength={200}
        style={{ height: "500px" }}
      > */}
        <div className="container mt-5 text-center">
          <h1
            className="text-black display-4 fade-in-text fw-bold"
            style={{ opacity: textOpacity }}
          >
            About Us
          </h1>
          <div className="row align-items-center">
            <div className="col-md-6 order-md-2">
              <img
                src={nobg}
                alt="Foodie Emblem"
                className="img-fluid rounded custom-shadow"
              />
            </div>
            <div className="col-md-6 order-md-1">
              <p className="lead fs-25  text-black" style={{ opacity: textOpacity,textAlign:'left' }}>
                Foodie is your gourmet buddy in the realm of flavours and culinary adventures. We are a dedicated group of foodies who
                think that food has the potential to bring people together,
                stimulate creativity, and provide joy to everyday life.
              </p>
              <p className="text-black" style={{ opacity: textOpacity, textAlign:'left' }}>
                At Foodie, we are on a mission to celebrate culinary diversity
                and unite food lovers from all backgrounds. Our vision is to
                empower local restaurants, become a trusted culinary resource,
                and create a vibrant community that explores, shares, and
                savors the world of food together. Join us in our flavorful
                journey and be part of the Foodie community, making a
                difference in the world of cuisine.
              </p>
            </div>
          </div>
        </div>
      {/* </Parallax> */}
      {/* More content */}
      <div className="row  ">
        <div className="col-md-6   ">
          <h2 className="text-primary text-center text-black" style={{ opacity: textOpacity }}>
            Our Vision
          </h2>
          <p className="text-black p-4" style={{ opacity: textOpacity }}>
            "Revolutionizing the unorganized food industry through innovative
            technology and empowering local eateries for a more flavorful
            future."
          </p>
        </div>
        <div className="col-md-6 ">
          <h2 className="text-primary text-center text-black" style={{ opacity: textOpacity }}>
            Our Mission
          </h2>
          <p className="text-black p-4" style={{ opacity: textOpacity }}>
            "Fueling culinary creativity, connecting food enthusiasts, and
            promoting local dining for a tastier tomorrow."
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
