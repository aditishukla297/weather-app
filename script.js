const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("local-time");
const cityTemp = document.getElementById("temperature");
const weatherIcon = document.getElementById("weather-icon");
const weatherTitle = document.querySelector(".weather-title");

const fetchWeatherData =  async () => {
    const value = input.value;
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=883329d53219483894a124530250807&q=${value}&aqi=yes`);
    const result =  await response.json();
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}°C / ${result.current.temp_f}°F`;
    weatherIcon.src = "https:" + result.current.condition.icon;
    console.log(result.current.condition.text);
    console.log(result.current.condition.text);
    console.log(result.current.condition.text);
    console.log(result.current.condition.text);
    console.log(result.current.condition.text);
    weatherTitle.innerHTML = capitalize(result.current.condition.text);
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
function capitalizeWords(text) {
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

button.addEventListener('click',fetchWeatherData);

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        fetchWeatherData();
    }
});