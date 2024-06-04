// JavaScript for Fetching Weather Data
document.addEventListener('DOMContentLoaded', () => {
    const getWeatherButton = document.getElementById('get-weather-button');
    const cityNameInput = document.getElementById('city-name');
    const weatherDisplay = document.getElementById('weather-display');
    const apiKey = '6fa0190db6e7bc1219ed7623b40d8446'; // Replace with your OpenWeatherMap API key

    getWeatherButton.addEventListener('click', () => {
        const cityName = cityNameInput.value.trim();
        if (cityName) {
            fetchWeatherData(cityName);
        }
    });

    function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayCurrentWeather(data);
                } else {
                    showError(data.message);
                }
            })
            .catch(error => {
                showError('An error occurred while fetching data');
            });
    }

    function displayCurrentWeather(data) {
        const { name, main, weather, wind } = data;
        const weatherItem = `
            <div class="weather-item">
                <h2>${name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Weather: ${weather[0].description}</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            </div>
        `;
        weatherDisplay.innerHTML = weatherItem;
    }

    function showError(message) {
        weatherDisplay.innerHTML = `<p class="error-message">${message}</p>`;
    }
});


// Displaying a 5-Day Forecast
document.addEventListener('DOMContentLoaded', () => {
    const getWeatherButton = document.getElementById('get-weather-button');
    const cityNameInput = document.getElementById('city-name');
    const weatherDisplay = document.getElementById('weather-display');
    const apiKey = '6fa0190db6e7bc1219ed7623b40d8446'; // Replace with your OpenWeatherMap API key

    getWeatherButton.addEventListener('click', () => {
        const cityName = cityNameInput.value.trim();
        if (cityName) {
            fetchWeatherData(cityName);
            fetchForecastData(cityName);
        }
    });

    function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayCurrentWeather(data);
                } else {
                    showError(data.message);
                }
            })
            .catch(error => {
                showError('An error occurred while fetching data');
            });
    }

    function fetchForecastData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "200") {
                    displayForecast(data);
                } else {
                    showError(data.message);
                }
            })
            .catch(error => {
                showError('An error occurred while fetching data');
            });
    }

    function displayCurrentWeather(data) {
        const { name, main, weather, wind } = data;
        const weatherItem = `
            <div class="weather-item">
                <h2>${name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Weather: ${weather[0].description}</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            </div>
        `;
        weatherDisplay.innerHTML = weatherItem;
    }

    function displayForecast(data) {
        let forecastHTML = '<h3>5-Day Forecast</h3>';
        const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        forecastList.forEach(forecast => {
            forecastHTML += `
                <div class="weather-item">
                    <h4>${new Date(forecast.dt_txt).toLocaleDateString()}</h4>
                    <p>Temperature: ${forecast.main.temp}°C</p>
                    <p>Weather: ${forecast.weather[0].description}</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Wind Speed: ${forecast.wind.speed} m/s</p>
                </div>
            `;
        });
        weatherDisplay.innerHTML += forecastHTML;
    }

    function showError(message) {
        weatherDisplay.innerHTML = `<p class="error-message">${message}</p>`;
    }
});



// Handling Errors
document.addEventListener('DOMContentLoaded', () => {
    const getWeatherButton = document.getElementById('get-weather-button');
    const cityNameInput = document.getElementById('city-name');
    const weatherDisplay = document.getElementById('weather-display');
    const apiKey = '6fa0190db6e7bc1219ed7623b40d8446'; // Replace with your OpenWeatherMap API key

    getWeatherButton.addEventListener('click', () => {
        const cityName = cityNameInput.value.trim();
        if (cityName) {
            fetchWeatherData(cityName);
            fetchForecastData(cityName);
        } else {
            showError('Please enter a city name');
        }
    });

    function fetchWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    displayCurrentWeather(data);
                } else {
                    showError(data.message);
                }
            })
            .catch(error => {
                showError('An error occurred while fetching data');
            });
    }

    function fetchForecastData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === "200") {
                    displayForecast(data);
                } else {
                    showError(data.message);
                }
            })
            .catch(error => {
                showError('An error occurred while fetching data');
            });
    }

    function displayCurrentWeather(data) {
        const { name, main, weather, wind } = data;
        const weatherItem = `
            <div class="weather-item">
                <h2>${name}</h2>
                <p>Temperature: ${main.temp}°C</p>
                <p>Weather: ${weather[0].description}</p>
                <p>Humidity: ${main.humidity}%</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            </div>
        `;
        weatherDisplay.innerHTML = weatherItem;
    }

    function displayForecast(data) {
        let forecastHTML = '<h3>5-Day Forecast</h3>';
        const forecastList = data.list.filter(item => item.dt_txt.includes("12:00:00"));
        forecastList.forEach(forecast => {
            forecastHTML += `
                <div class="weather-item">
                    <h4>${new Date(forecast.dt_txt).toLocaleDateString()}</h4>
                    <p>Temperature: ${forecast.main.temp}°C</p>
                    <p>Weather: ${forecast.weather[0].description}</p>
                    <p>Humidity: ${forecast.main.humidity}%</p>
                    <p>Wind Speed: ${forecast.wind.speed} m/s</p>
                </div>
            `;
        });
        weatherDisplay.innerHTML += forecastHTML;
    }

    function showError(message) {
        weatherDisplay.innerHTML = `<p class="error-message">${message}</p>`;
    }
});
