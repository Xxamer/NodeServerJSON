'use strict' //Para que sea lo más parecido a Java

var express = require('express'); //importación de librerías
var app = express(); //llamamos al método
var api = express.Router(); //Método dentro de la librería express, sirve para hacer el enrutamiento


var movies = [
    {
        id:0,
        name: 'Bee Movie',
        description: 'According to all known laws of aviation,  there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground.  The bee, of course, flies anyway because bees dont care  what humans think is impossible.',
        ageofrelease: 2003
    }, {
        id:1,
        name: 'Die hard',
        description: 'This is a guy who died hard',
        ageofrelease: 1998
    }, {
        id:2,
        name: 'Mary poops',
        description: 'A magic woman starts to doing things ',
        ageofrelease: 2015
    }, {
        id:3,
        name: '7 apellidos vizcainos',
        description: 'No sé, tiene pinta de molar',
        ageofrelease: 2018
    }, {
        id:4,
        name: 'Torrente 7',
        description: 'Torrente becomes a robot who destroys the entire españita',
        ageofrelease: 2018
    }
    , {
        id:5,
        name: '15 apellidos vizcainos',
        description: 'Es mejor que la 7',
        ageofrelease: 2022
    }, {
        id:7,
        name: 'Sixtolo compilation',
        description: 'El mejor youtuber',
        ageofrelease: 2033
    }
];

const OneMovie = (req, res) => {
    res.status(200).send(movies[0]);
    return;

} //Función moderna

const GetMovies = (req, res) => {
    res.status(200).send(movies); //obtenerlo de una variable
    return;
}

const GetSelectedMovie =(req,res) =>{
    const movieId = req.params.id;
    for(var i=movieId;i<movies.length;i++){
        res.status(200).send(movies[i]);
        return;
    }
}


//rutas que puedes modificar
api.get('/one-movie', OneMovie); //Llamamos a la función que se encargará de cumplir la petición
api.get('/all-movies', GetMovies);
api.get('/movies/:id', GetSelectedMovie);

// /api es una ruta base, se puede cambiar
app.use('/api', api); //Especificación de la raiz de nuestro servicio web

const port = 40000;
app.listen(port, () => {
    console.log('listening on http://localhost:' + port)
});