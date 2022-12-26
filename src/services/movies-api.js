import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e1c61c6acd88be7684f0f324a2544526';

export async function fetchMoviesTrend() {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
}

export async function movieDetailsById(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`);
  return response.data
}

export async function movieCast(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
  return response.data.cast
}

export async function movieReviews(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
  return response.data.results
}

export async function searchMovieByName(name) {
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`);
  return response.data.results
}