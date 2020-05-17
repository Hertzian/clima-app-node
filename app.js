const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    })
    .argv;

// console.log(argv.direccion);

// lugar.GetLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima('40.419998','-3.700000')
//     .then(console.log)
//     .catch(err => console.log('ERROR! ', err));

const getInfo = async(direccion) => {

    try{
        const coords = await lugar.GetLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El la temperatura de ${coords.direccion} es de ${temp}°C`;

    }catch(err){
        return `no se pudo determinar el clima de ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(err => console.log('Valio madre', err));