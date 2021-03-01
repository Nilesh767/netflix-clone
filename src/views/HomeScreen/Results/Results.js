import React from "react";
import { toast } from "react-toastify";

import { discover } from "../../../api/Requests";

import Result from "./Result/Result";

const Results = ({ compType }) => {
  return (
    <div>
      {compType === "movies" ? (
        <Result title="Movies" fetchUrl={discover.fetchMovies} />
      ) : compType === "show" ? (
        <Result title="TV Shows" fetchUrl={discover.fetchShows} />
      ) : compType === "new" ? (
        <Result title="New and Popular" fetchUrl={discover.fetchNew} />
      ) : (
        toast.error("Error Occured")
      )}
    </div>
  );
};

export default Results;
