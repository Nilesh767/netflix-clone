import React from "react";
import { useSelector } from "react-redux";

import { selectComponent } from "../../features/componentSlice";

import Nav from "../../Components/UI/NavBar/Nav";
import Results from "./Results/Results";
import Banner from "../../Components/UI/Banner/Banner";
import Rows from "../../Components/UI/Rows/Rows";

import "./Home.css";

const Home = () => {
  const component = useSelector(selectComponent);

  return (
    <div>
      <div>
        <Nav />
      </div>
      {component !== "home" ? (
        <Results compType={component} />
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
