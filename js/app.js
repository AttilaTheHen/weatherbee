import getWeather from '../services/weather-api.js';
import API_KEY from '../config.js';
import DataTracker from './DataTracker.js';

const searchForm = document.getElementById('search-form');
const statsSection = document.getElementById('stats');

const times = ['humidity', '6:00:00 AM', '12:00:00 PM', '6:00:00 PM'];

searchForm.addEventListener('submit', () => {
    event.preventDefault();
    const zip = document.getElementById('search').value;
    clear();
    
    times.forEach(time => {
        if(time === 'humidity') {
            getData(zip, '12:00:00 PM')
                .then(data => {
                    const humidity = new DataTracker(data, 'humidity').render();
                    statsSection.appendChild(humidity);
                });
        }
        else {
            getData(zip, time)
                .then(data => {
                    const tempData = new DataTracker(data, time).render();
                    statsSection.appendChild(tempData);
                });
        }
    });
});

const getData = (zip, time) => {
    return getWeather(zip, API_KEY)
        .then(data => data.list.filter(entry => new Date(entry.dt_txt).toLocaleTimeString() === time));
};

const clear = () => {
    const domSection = document.getElementById('stats');
    while(domSection.lastElementChild) domSection.lastElementChild.remove();
};