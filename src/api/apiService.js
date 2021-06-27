import axios from "axios";

const API_KEY_V4 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2Q2Mzk0MGU4NjBjZTIwMzA5NjliNDIwMzJhZTk5MiIsInN1YiI6IjYwZDdjMWMyNmMwYjM2MDA3NTAwOWMxMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vupSqVtA0PRApUJYkZTkji8byDLATuFyfOJZ6ROdgjI";
const API_VERSION = "3";

axios.defaults.baseURL = `https://api.themoviedb.org/${API_VERSION}`;
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY_V4}`;
axios.defaults.headers.common[
  "Content-Type"
] = `application/json;charset=utf-8`;

export const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export function getImagePath(path, template = "avatar.jpg") {
  return path
    ? `${IMAGE_PATH}${path}`
    : process.env.PUBLIC_URL + `/${template}`;
}

export async function getTrendMovies() {
  try {
    const {
      data: { results: data },
    } = await axios.get("/trending/movie/day");
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchMovies(query) {
  try {
    const {
      data: { results: data },
    } = await axios.get(`/search/movie?query=${query}`);
    return data || [];
  } catch (error) {
    throw error;
  }
}

export async function searchMovieById(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function searchMovieCreditsById(movieId) {
  try {
    const {
      data: { crew: data },
    } = await axios.get(`/movie/${movieId}/credits`);
    return data || [];
  } catch (error) {
    throw error;
  }
}

export async function searchMovieReviewsById(movieId) {
  try {
    const {
      data: { results: data },
    } = await axios.get(`/movie/${movieId}/reviews`);
    return data || [];
  } catch (error) {
    throw error;
  }
}
