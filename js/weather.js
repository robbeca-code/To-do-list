const API_KEY = '287d837f6324729c0d44e435b45b5325';

function onGeoSuccess(position) {
    lon = position.coords.longitude;
    lat = position.coords.latitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃ `;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert('Can not find your weather');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);