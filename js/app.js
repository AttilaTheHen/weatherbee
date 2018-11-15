import getWeather from '../services/weather-api.js';
import API_KEY from '../config.js';

const searchForm = document.getElementById('search-form');
let weatherData;

searchForm.addEventListener('submit', () => {
    event.preventDefault();

    const zip = document.getElementById('search').value;
    morningTemp(zip);
});

function morningTemp(zip) {
    getWeather(zip, API_KEY)
        .then(data => {
            weatherData = data.list.filter(time => new Date(time.dt_txt).toLocaleTimeString() === '6:00:00 AM');
            console.log(weatherData);
        });
}