let icon = document.getElementById('icon')
let city = document.getElementById('city')
let temperature = document.getElementById('temperature')
let condition = document.getElementById('condition')
let aqi = document.getElementById('aqi')
let openButton = document.querySelector('[data-open-modal]')
let closeButton = document.querySelector('[data-close-modal]')
let modal = document.querySelector('[data-modal]')
let aqiModal = document.getElementById('aqi_modal')
let aqiModalText = document.getElementById('aqi_modal_text')
let pm2_5 = document.getElementById('PM2_5')
let pm10 = document.getElementById('PM10')
let so2 = document.getElementById('SO2')
let no2 = document.getElementById('NO2')
let o3 = document.getElementById('O3')
let co = document.getElementById('CO')
let wind = document.getElementById('wind')
let pressure = document.getElementById('pressure')
let valueFeelsLike = document.getElementById('value-feels-like')
let valueHumidity = document.getElementById('value-humidity')
let valueUV = document.getElementById('value-uv')
let valueClouds = document.getElementById('value-clouds')

openButton.addEventListener("click", () => {
    modal.showModal();
})

closeButton.addEventListener("click", () => {
    modal.close();
})

modal.addEventListener("click", e => {
    const modalDimensions = modal.getBoundingClientRect()
    if (
        e.clientX < modalDimensions.left ||
        e.clientX > modalDimensions.right ||
        e.clientY < modalDimensions.top ||
        e.clientY > modalDimensions.bottom
    ) {
        modal.close()
    }
})

fetch('http://localhost:8000/')
    .then(response => {return response.json()})
    .then(data => {
        console.log(data);
        if (data.current.is_day==1) {
            document.body.style.backgroundColor = "#47BADE";
        } else {
            document.body.style.backgroundColor = "#000A18";
        }
        icon.src = data.current.condition.icon
        city.innerText = data.location.name
        temperature.innerText = `${Math.round(data.current.temp_c)}°C`
        condition.innerText = data.current.condition.text
        aqi.innerText = `AQI ${data.current.air_quality["us-epa-index"]}`
        aqiModal.innerText = `${data.current.air_quality["us-epa-index"]}`
        switch (data.current.air_quality["us-epa-index"]) {
            case 1:
                aqiModalText.innerText = 'Good';
                break;
            case 2:
                aqiModalText.innerText = 'Moderate';
                break;
            case 3:
                aqiModalText.innerText = 'Unhealthy for sensitive group';
                break;
            case 4:
                aqiModalText.innerText = 'Unhealthy';
                break;
            case 5:
                aqiModalText.innerText = 'Very Unhealthy';
                break;
            case 6:
                aqiModalText.innerText = 'Hazardous';
                break;
        }
        pm2_5.innerText = `${(data.current.air_quality.pm2_5).toFixed(1)}`
        pm10.innerText = `${(data.current.air_quality.pm10).toFixed(1)}`
        so2.innerText = `${(data.current.air_quality.so2).toFixed(1)}`
        no2.innerText = `${(data.current.air_quality.no2).toFixed(1)}`
        o3.innerText = `${(data.current.air_quality.o3).toFixed(1)}`
        co.innerText = `${(data.current.air_quality.co).toFixed(1)}`
        wind.innerText = `${data.current.wind_kph}km/h ${data.current.wind_dir}`
        pressure.innerText = `${data.current.pressure_mb}hPa`
        valueFeelsLike.innerText = `${data.current.feelslike_c}°C`
        valueHumidity.innerText = `${data.current.humidity}%`
        valueUV.innerText = `${data.current.uv}`
        valueClouds.innerText = `${data.current.cloud}%`
    })
    .catch(err => console.log(err))