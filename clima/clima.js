const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d35ef813c29428a7358dba4b23abd55c&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}