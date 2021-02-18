import React from "react";
import { SpinnerDotted } from "spinners-react";

import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <SpinnerDotted
        size={68}
        thickness={180}
        speed={115}
        color="rgba(229, 9, 20, 0.99)"
      />
    </div>
  );
};

export default Loading;
