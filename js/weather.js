const API_KEY = "f6491cdbdbaaeacb45e33bc20967dbd5";


function geoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#geolocation span:first-child");
        const city = document.querySelector("#geolocation span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
        console.log()
    })
}

function geoError() {
    alert("can't find you.No weather for you")
}


navigator.geolocation.getCurrentPosition(geoOk, geoError);