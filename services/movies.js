//Corazon de la app por lo tanto ella debe servir los mocks
//Mock es un archivo de datos falsos para ejemplificar o hacer test
const { moviesMock } = require('../utils/mocks/movies');

//Logica de negocio
class MoviesService {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    }

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0]);
        return movie || {};
    }

    async createMovie() {
        const createMovieId = await Promise.resolve(moviesMock[0].id);
        return createMovieId;
    }

    async updateMovie() {
        const updateMovieId = await Promise.resolve(moviesMock[0].id);
        return updateMovieId;
    }

    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0].id);
        return deletedMovieId;
    }
}

module.exports = MoviesService;