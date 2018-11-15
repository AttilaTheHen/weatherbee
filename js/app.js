import getWeather from '../services/weather-api.js';
import API_KEY from '../config.js';
import DataTracker from './DataTracker.js';

const searchForm = document.getElementById('search-form');
const statsSection = document.getElementById('stats');

searchForm.addEventListener('submit', () => {
    event.preventDefault();
    const zip = document.getElementById('search').value;
    morningTemp(zip)
        .then(data => {
            const tempData = new DataTracker(data).render();
            statsSection.appendChild(tempData);
        });
});

const morningTemp = zip => {
    return getWeather(zip, API_KEY)
        .then(data => data.list.filter(time => new Date(time.dt_txt).toLocaleTimeString() === '6:00:00 AM'));
};