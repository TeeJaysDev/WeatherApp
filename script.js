let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let condition = document.getElementById('condition')
let wind_kph = document.getElementById('wind-kph')
let wind_dir = document.getElementById('wind-dir')
let pressure = document.getElementById('pressure')

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        city.innerText = data.location.name
        temperature.innerText = `${Math.round(data.current.temp_c)}°C`
        condition.innerText = data.current.condition.text
        wind_kph.innerText = `${data.current.wind_kph}km/h`
        wind_dir.innerText = data.current.wind_dir
        pressure.innerText = `${data.current.pressure_mb}hPa`
    })
    .catch(err => console.log(err))