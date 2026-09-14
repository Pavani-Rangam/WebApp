## Weather App

A simple, clean weather lookup app built with HTML, CSS, and JavaScript. Enter a city name to see the current temperature, humidity, wind speed, and condition, with a matching weather icon.

## Features

- Search current weather by city name
- Displays temperature (°C), humidity, and wind speed
- Dynamic weather icon based on condition (Clear, Clouds, Rain, Drizzle, Snow, Thunderstorm, Haze/Mist/Fog/Smoke)
- Friendly error message when a city isn't found
- Responsive, card-style UI with a gradient background

## How It Works

1. The user types a city name and clicks **Search**.
2. `script.js` calls the [OpenWeatherMap Current Weather API](https://openweathermap.org/current) for that city.
3. If the city is found, the app updates the temperature, humidity, wind, condition text, and icon.
4. If the request fails (e.g. invalid city), an error message is shown instead.

## Tech Stack

- HTML5
- CSS3
- JavaScript 
- [OpenWeatherMap API](https://openweathermap.org/api)

