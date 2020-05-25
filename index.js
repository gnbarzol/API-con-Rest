const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler} = require('./utils/middleware/errorHandler');

// body parse
app.use(express.json());

moviesApi(app);

//Middleware de errores
app.use(logErrors);
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

