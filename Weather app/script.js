const apiKey = 'a8c355d579715cd1e8653d1a5fe4db87';  //  API key

const locationForm = document.getElementById('location-form');
const locationInput = document.getElementById('location-input');
const cityName = document.getElementById('city-name');
const description = document.getElementById('description');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

function fetchWeather(location) {
    const apiUrl = `a8c355d579715cd1e8653d1a5fe4db87">api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => alert('Failed to fetch weather data. Please try again.'));
}

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found. Please enter a valid location.');
        return;
    }

    cityName.textContent = data.name;
    description.textContent = `Conditions: ${data.weather[0].description}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = locationInput.value;
    fetchWeather(location);
    locationInput.value = '';
});
