const express = require('express');
const helmet = require('helmet');
const app = express();

const authApi = require('./routes/auth');

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies');

const { 
    logErrors, 
    wrapErrors, 
    errorHandler
} = require('./utils/middleware/errorHandler');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parse
app.use(express.json());
app.use(helmet());

//Routes
moviesApi(app);
userMoviesApi(app);
authApi(app);

//NotFound, catch 404
app.use(notFoundHandler);

//Middleware de errores
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
});


// app.get('/', (req, res) => {
//     res.send('Hello Worl!');
// });

// app.get('/json', (req, res) => {
//     res.json({hello: 'World'});
// });

// app.get('/:year', (req, res) => {
//     const año = parseInt(req.params.year);
//     (((año % 4 == 0) && (año % 100 != 0 )) || (año % 400 == 0)) 
//     ? res.send(`El año ${año} es bisiesto`) 
//     : res.send(`El año ${año} no es bisiesto`) 
// });

