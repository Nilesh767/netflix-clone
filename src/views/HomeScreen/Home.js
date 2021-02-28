import React, { useState } from "react";

import Banner from "../../Components/UI/Banner/Banner";
import Nav from "../../Components/UI/NavBar/Nav";
import Rows from "../../Components/UI/Rows/Rows";

import "./Home.css";
import Results from "./Results/Results";

const Home = () => {
  const [showResult, setShowResult] = useState(true);

  const resultHandler = () => {};

  return (
    <div>
      <div>
        <Nav />
      </div>
      {showResult ? (
        <Results />
      ) : (
        <div>
          <div>
            <Banner />
          </div>
          <div>
            <Rows />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
