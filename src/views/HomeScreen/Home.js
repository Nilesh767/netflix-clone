import React from "react";

import Banner from "../../Components/UI/Banner/Banner";
import Nav from "../../Components/UI/NavBar/Nav";
import Rows from "../../Components/UI/Rows/Rows";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Rows />
      </div>
    </div>
  );
};

export default Home;
