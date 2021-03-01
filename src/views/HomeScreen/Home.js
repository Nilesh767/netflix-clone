import React from "react";
import { useSelector } from "react-redux";

import Banner from "../../Components/UI/Banner/Banner";
import Nav from "../../Components/UI/NavBar/Nav";
import Rows from "../../Components/UI/Rows/Rows";
import { selectComponent } from "../../features/componentSlice";

import "./Home.css";
import Results from "./Results/Results";

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
