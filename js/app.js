import getWeather from '../services/weather-api.js';
import API_KEY from '../config.js';

const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', () => {
    event.preventDefault();
    
    const zip = document.getElementById('search').value;
    getWeather(zip, API_KEY)
        .then(data => console.log(data));
});