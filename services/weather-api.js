export default function getWeather(zip, apiKey) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${apiKey}&units=imperial`;
    return fetch(url)
        .then(res => res.json());
}