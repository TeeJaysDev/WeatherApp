const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

let response = null;
new Promise(async (resolve, reject) => {
    try {
        response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=856c3140140e4210ae6200618231005&q=Leszno&aqi=yes`, {
        });
    } catch(error) {
        response = null;
        console.log(error);
        reject(error);
    }
    if (response) {
        const res = response.data;
        console.log(res);
        resolve(res);
    }
});