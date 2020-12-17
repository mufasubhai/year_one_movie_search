import axios from 'axios';

export const getMovies = () => {
    return axios.get('/api/movies')
}

export const getMovie = (id) => {
    return axios.get(`/api/movies/${id}`)
}
export const createMovie = (movieData) => {
    return axios.post('/api/', movieData)
}

export const updateMovie = (movieData) => {
    return axios.patch(`/api/movies/${movieData._id}`, movieData)
}

export const deleteMovie = (movieId) => {
    return axios.delete(`/api/movies/${movieId}`)
}