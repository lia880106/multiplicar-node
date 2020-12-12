const multiplicar = require("./multiplicar/multiplicar");

const { crearArchivo } = require('./multiplicar/multiplicar'); //luego de la palabra const o let si vienen llaves es una destructuracion.

let argv = process.argv; //Crear archivo desde consola.
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err));