const PORT = 8000;
const axios = require('axios');
const dotenv = require('dotenv');
const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())

dotenv.config();

app.get('/', async (req, res) =>{
    try {
        const response = await axios.get(
            `http://api.weatherapi.com/v1/current.json?key=856c3140140e4210ae6200618231005&q=Leszno&aqi=yes`);
        res.json(response.data);
    } catch(error) {
        console.log(error);
    }
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))