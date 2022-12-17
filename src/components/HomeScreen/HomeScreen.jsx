import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {/* Rows */}
    </div>
  );
};

export default HomeScreen;
