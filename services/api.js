import axios from "axios";

const API_KEY = 'd4bf20e0398b4402ea5c7332913eb22c';
// axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

const fetchTrending = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
    return data.results;
};
export default fetchTrending;