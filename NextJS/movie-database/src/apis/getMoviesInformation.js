import { apiClient } from "./axiosInstance";

export async function getMovieDetails(movieId) {
    try {
        console.log('Fetching movie details via API route for ID:', movieId);
        const response = await apiClient.get(`/movies/${movieId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
}