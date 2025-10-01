import { apiClient } from "./axiosInstance";

export async function getMovies() {
    try {
        const response = await apiClient.get('/movies/now_playing');
        if(response.status !== 200) {
            throw new Error(`API error: ${response.status}`);
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return { 
            results: [], 
            total_pages: 0, 
            page: 1,
            total_results: 0 
        };
    }
}

export async function searchMovies(query) {
    try {
        const response = await apiClient.get(`/movies/?query=${encodeURIComponent(query)}`);
        return response.data;
    } catch (error) {
        console.error('Error searching movies:', error);
        return { 
            results: [], 
            total_pages: 0, 
            page: 1,
            total_results: 0 
        };
    }
}