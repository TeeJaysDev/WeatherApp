let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let condition = document.getElementById('condition')
let aqi = document.getElementById('aqi')
let wind = document.getElementById('wind')
let pressure = document.getElementById('pressure')
let valueFeelsLike = document.getElementById('value-feels-like')
let valueHumidity = document.getElementById('value-humidity')
let valueUV = document.getElementById('value-uv')
let valueClouds = document.getElementById('value-clouds')

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        city.innerText = data.location.name
        temperature.innerText = `${Math.round(data.current.temp_c)}°C`
        condition.innerText = data.current.condition.text
        aqi.innerText = `AQI ${data.current.air_quality["us-epa-index"]}`
        wind.innerText = `${data.current.wind_kph}km/h ${data.current.wind_dir}`
        pressure.innerText = `${data.current.pressure_mb}hPa`
        valueFeelsLike.innerText = `${data.current.feelslike_c}°C`
        valueHumidity.innerText = `${data.current.humidity}%`
        valueUV.innerText = `${data.current.uv}`
        valueClouds.innerText = `${data.current.cloud}%`
    })
    .catch(err => console.log(err))