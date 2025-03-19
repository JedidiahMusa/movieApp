const API_KEY = "b70bbba64e28a4bcf33cf2101bfb86d1";
const API_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;    
}
export const searchMovies = async (query) => {
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;    
}
