import React from "react";
import Reviews from "./Reviews";
import AboutDPL from "./AboutDPL";
import DPLExperience from "./DPLExperience";
import Instagram from "./Instagram";
import Footer from "./Footer";

class About extends React.Component {
  render() {
    return (
      <>
        <AboutDPL />
        <br />
        <Reviews />
        <br />
        <br />
        <DPLExperience />
        <br />
        <br />
        <Instagram />
        <Footer />
      </>
    );
  }
}

export default About;
