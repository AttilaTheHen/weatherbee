import getWeather from '../services/weather-api.js';
import API_KEY from '../config.js';
import DataTracker from './DataTracker.js';

const searchForm = document.getElementById('search-form');
const statsSection = document.getElementById('stats');

const morning = '6:00:00 AM';

searchForm.addEventListener('submit', () => {
    event.preventDefault();
    const zip = document.getElementById('search').value;
    
    getTemp(zip, morning)
        .then(data => {
            const tempData = new DataTracker(data, morning).render();
            statsSection.appendChild(tempData);
        });
});

const getTemp = (zip, time) => {
    return getWeather(zip, API_KEY)
        .then(data => data.list.filter(entry => new Date(entry.dt_txt).toLocaleTimeString() === time));
};
