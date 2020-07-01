const baseUrl = 'https://api.themoviedb.org/3';
const apiKey = '5a47d3831d2cc8edc043a921c013d589';

const getPopularMovies = async () => {
  try {
    const {results} = await fetch(
      `${baseUrl}/trending/movie/day?api_key=${apiKey}`,
    ).then(response => response.json());
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getMovieFullInfo = async id => {
  try {
    const data = await fetch(
      `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`,
    ).then(response => response.json());
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getMoviesBySearchName = async searchName => {
  try {
    const {results} = await fetch(
      `${baseUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${searchName}&page=1&include_adult=false`,
    ).then(response => response.json());
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getMoviesCast = async movieId => {
  try {
    const {cast} = await fetch(
      `${baseUrl}/movie/${movieId}/credits?api_key=${apiKey}`,
    ).then(response => response.json());
    return cast;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const getMoviesReviews = async movieId => {
  try {
    const {results} = await fetch(
      `${baseUrl}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
    ).then(response => response.json());
    return results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default {
  getPopularMovies,
  getMovieFullInfo,
  getMoviesBySearchName,
  getMoviesCast,
  getMoviesReviews,
};
