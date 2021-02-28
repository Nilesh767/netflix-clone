const API_KEY = "a417cf3c30f748d4ec50670a5ba72b37";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-us`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
};

const discover = {
  fetchMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
  fetchShows: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,
  fetchNew: `/trending/all/week?api_key=${API_KEY}`,
};

const fetchSearchString = (query) => {
  let queryString = encodeURIComponent(query);
  return `/search/multi?api_key=${API_KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`;
};

export { fetchSearchString, discover };
export default requests;
