const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

moviesApi(app);

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

