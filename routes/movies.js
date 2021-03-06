const express = require('express');
const MoviesService = require('../services/movies');
const passport = require('passport');

const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require('../utils/schemas/movies');

const validationHandler = require('../utils/middleware/validationHandler');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//Llamo al cacheResponse y el tiempo
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTES_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

// JWT strategy
require('../utils/auth/strategies/jwt');

//Para mantener el control sobre que aplicacion va a consumir nuestra ruta
//La única responsabilidad de las rutas es saber como recibe parametros y como se los envia a los servicios para que estos los resuelvan y nos envien los datos que necesitamos
function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router); //Este va hacer el home para esta funcion

  const moviesServices = new MoviesService();

  //Aqui la ruta home('/') es /api/movies
  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async function (req, res, next) {
      cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
      const { tags } = req.query;
      try {
        const movies = await moviesServices.getMovies({ tags });
        //Lanzo un error para probar el middleware de errorHandler
        //throw new Error('Error getting movies');

        res.status(200).json({
          data: movies,
          message: 'movies listed',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { movieId } = req.params;
      try {
        const movie = await moviesServices.getMovie({ movieId });
        res.status(200).json({
          data: movie,
          message: 'movie retrieved',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    validationHandler(createMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req; //Body tendra un alias llamado movie con body: movie
      try {
        const createMovieId = await moviesServices.createMovie({ movie });
        res.status(201).json({
          data: createMovieId,
          message: 'movies created',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    validationHandler({ movieId: movieIdSchema }, 'params'),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { body: movie } = req;
      const { movieId } = req.params;
      try {
        const updatedMovieId = await moviesServices.updateMovie({
          movieId,
          movie,
        });
        res.status(200).json({
          data: updatedMovieId,
          message: 'movie updated',
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:moviedId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:movies']),
    validationHandler({ movieId: movieIdSchema }),
    async function (req, res, next) {
      const { moviedId } = req.params;
      try {
        const deletedMovieId = await moviesServices.deleteMovie({ moviedId });
        res.status(200).json({
          data: deletedMovieId,
          message: 'movie deleted',
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
