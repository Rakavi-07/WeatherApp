document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city === "") {
        alert("Please enter a city name!");
        return;
    }
    getWeather(city);
});

async function getWeather(city) {
    const url = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        displayWeather(data, city);
    } catch (error) {
        alert("Unable to fetch weather details. Try again!");
    }
}

function displayWeather(data, city) {
    const current = data.current_condition[0];
    document.getElementById("weatherInfo").style.display = "block";
    document.getElementById("cityName").textContent = city.toUpperCase();
    document.getElementById("temp").textContent = `🌡️ Temperature: ${current.temp_C}°C`;
    document.getElementById("desc").textContent = `🌥️ Condition: ${current.weatherDesc[0].value}`;
    document.getElementById("humidity").textContent = `💧 Humidity: ${current.humidity}%`;
}
