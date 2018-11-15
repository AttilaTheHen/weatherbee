WeatherBee
====

A simple frontend for searching and displaying data from the OpenWeatherMap API.

## Get Started
1. Fork and clone the repo.
1. Run `npm i` inside the repo directory to install the necessary dependencies.
1. Make your own `config.js` file in the root directory based off of the `config.example.js` file.
    - If you need an OpenWeatherMap API key: go to their [website](https://openweathermap.org/), sign up for an account, and then generate a new API key (under the "API keys" section of your profile page).
1. In your terminal, run `npm start` to start the server. It will automatically open in a new browser window/tab.

## How to Use
Type in a US ZIP code to get four sets of data back from the OpenWeatherMap API across their five-day forecast.

## Notes
* The API brings back a set of weather data forecasted for the next five days in three-hour increments (6am, 9am, 12pm, etc.) - an array of about 40 objects.
* The `getData` function inside `app.js` takes a ZIP code and a time ("morning", "day", or "night"), calls the API and then uses the time given to only bring back the temperature from those times, filtering out the other times.
* "Humidity" can also be passed in as a "time" parameter, in which case the API call will bring back the humidity values at 12pm across the five-day forecast, filtering out the other times.