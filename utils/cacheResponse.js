const { config } = require('../config');

/*Es molesto que en desarrollo el cache este activado, por eso lo verificamos*/
function cacheResponse(res, seconds) {
    if(!config.dev){
        res.set('Cache-Control', `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;
/*Agregar cache solo a la ruta donde es necesario por ejemplo a la lista de peliculas y al ver una pelicula en especifico */