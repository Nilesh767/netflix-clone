import React from "react";

import requests from "../../Requests";
import Banner from "../../Components/UI/Banner/Banner";
import Nav from "../../Components/UI/NavBar/Nav";
import Row from "../../Components/UI/Rows/Row";
import Avatar from "../../Components/UI/NavBar/Avatar/Avatar";

import "./Home.css";

function Home() {
  return (
    <div>
      <Nav />
      <div className="nav__avatar">
        <Avatar />
      </div>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Home;
