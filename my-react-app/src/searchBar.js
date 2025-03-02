import { fetchWeather } from "./script.js"
import { getWeather } from "./windDirection.js"
import { getWeather } from "./Forecast.js"


const searchButton = document.getElementById("searchIcon")
const searchInput = document.getElementById("searchInput")
const testDiv = document.getElementById("testDiv")


    searchButton.addEventListener("click", () => {
        let city = searchInput.value.trim()

        //fetchWeather function from script.js file
        fetchWeather(city)

        //fetchWeather function from forecast.js file
         getWeather(city)

        //fetchWeather function from .js file
        getWeather(city)

        testDiv.textContent =  `${searchInput.value}`
    })
    
