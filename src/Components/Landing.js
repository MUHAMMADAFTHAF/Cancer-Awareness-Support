import React from "react";
import './Landing.css';
import Landingimg from '../Images/Landingimg.jpg';


const Landing = () => (
  <section className="landing">
    <img src={Landingimg} alt="Cancer Awareness Banner" className="banner" />
    <h1>Cancer is word, not a sentence.</h1>
    <p>Join us in spreading hope and support for those affected by cancer.</p>
  </section>
);

export default Landing;