const fs = require('fs'); //Existen tres tipos de require. Esta es una libreria propia de Node
// const fs = require('express'); // No es propia de node, es un paquete que se instala. Son paquete hechos por otras personas.
// const fs = require('./fs'); // son de archivo, se identifica con ./ o ../ y luego viene el path dnd se encuentra el archivo dentro del proyecto.




let crearArchivo = (base) => { // Otra forma de exportar un module module.exports.crearArchivo=(base).....
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${base}' no es un número`); // el reject dispara el error pero no detiene la funcion por eso se debe poner un return.
            return;
        }

        let data = '';
        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base * i}\n`; // \n salto de linea.
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => { // fs.writeFile(file, data[, options], callback)
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
            //console.log(`El archivo tabla-${base}.txt ha sido creado!`);
        });

    });

};

module.exports = { // Esta es un forma de exportar un module, esta es mejor, pk si hay muchas funciones que se quieran exportar se ponen todas aki dentro.
    crearArchivo
}