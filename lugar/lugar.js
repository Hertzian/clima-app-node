const axios = require('axios');

const GetLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key':'f40ebe207fmshfe8518333a6596ap10f275jsn2f5dae8c77c7',
            useQueryString: true
        }
    })
    
    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    GetLugarLatLng
}