const express = require('express');
const MoviesService = require('../services/movies');

//Para mantener el contro sobre que aplicacion va a consumir nuestra ruta
//La única responsabilidad de las rutas es saber como recibe parametros y como se los envia a los servicios para que estos los resuelvan y nos envien los datos que necesitamos
function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router); //Este va hacer el home para esta funcion

    const moviesServices = new MoviesService();

    //Aqui la ruta home('/') es /api/movies
    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try{
            const movies = await moviesServices.getMovies({ tags });
            res.status(200).json({
                data: movies,
                message: 'movies listed'
            })
        }catch{
            next(err);
        }
    });

    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try{
            const movie = await moviesServices.getMovie({ movieId });
            res.status(200).json({
                data: movie,
                message: 'movie retrieved'
            })
        }catch{
            next(err);
        }
    });

    router.post('/', async function(req, res, next) {
        const { body: movie } = req; //Body tendra un alias llamado movie con body: movie
        try{
            const createMovieId = await moviesServices.createMovie({ movie });
            res.status(201).json({
                data: createMovieId,
                message: 'movies created'
            })
        }catch{
            next(err);
        }
    });

    router.put('/:movieId', async function(req, res, next) {
        const { body: movie } = req;
        const { movieId } = req.params;
        try{
            const updatedMovieId = await moviesServices.updateMovie({ movieId, movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated'
            })
        }catch{
            next(err);
        }
    });
    
    router.delete('/:moviedId', async function(req, res, next) {
        const { movieId } = req.params;
        try{
            const deletedMovieId = await moviesServices.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovieId,
                message: 'movie deleted'
            })
        }catch{
            next(err);
        }
    });
    
};

module.exports = moviesApi;


