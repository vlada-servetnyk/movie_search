import axios from "axios";

const urlTrend = 'https://api.themoviedb.org/3/trending/movie/day';
const urlSearch = 'https://api.themoviedb.org/3/search/movie';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGJmMjBlMDM5OGI0NDAyZWE1YzczMzI5MTNlYjIyYyIsIm5iZiI6MTczODgyNzc4NC45NTcsInN1YiI6IjY3YTQ2ODA4NDM3ODFiNGJmYTJmY2Y0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vYV4bSeYBiBP5swJ1A3xBEyaRtdbzI66kPw_FfsYDfE';

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: "application/json"
  },
  params: {
    language: "en-US",
    page: 1,
  }
};


export const fetchTrending = async () => {
    const { data } = await axios.get(urlTrend, options);
    return data.results;
};

export const fetchSearchFilms = async (query) => {
    const { data } = await axios.get(urlSearch, {
        ...options,
        params: {
          ...options.params,
          query,
        }

    });
    return data.results;
};

export const fetchFilmById = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, options);
  return data;
};

export const fetchCast = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, options);
  return data;
};

export const fetchReviews = async (movieId) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, options);
  return data;
}