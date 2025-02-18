const apiKey = "e8bbf07a65817437a530899c1697f0be";

export async function fetchWeather(city) {
    try { const response = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    if (data.cod === 200){
        displayWeather(data)
    } else {
        alert("City noy found. Please try again.")
    }

    }
     catch (error) {
        console.error("Error fetching weather data:", error)
     }
}

    // Function to display weather data

    export function displayWeather(data) {
        const weatherCity = document.getElementById("weatherCity")
        const weatherIcon = document.getElementById("weatherIcon")
        const weatherTemperature = document.getElementById("weatherTemperature")
        const weatherCondition = document.getElementById("weatherCondition")

    // Extract data from API response
        const temp = data.main.temp; // Temperature
        const condition = data.weather[0].description // Condition (e.g., cloudy, sunny)
        const iconCode = data.weather[0].icon // Icon code

        // Update HTML
        weatherTemperature.innerHTML = `${temp}C`;
        weatherCondition.innerHTML = `${condition}`;
        weatherIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${condition}">`;
    }

    fetchWeather("Toronto");

