import "../css/styles.css";

function init() {
    document.body.innerHTML = `
    <div id="main">
        <div id="search">
            <h1>Weather App</h1>
            <input id="search-input" name="q" type="search" placeholder="Search for a location..." required>
            <button id="search-btn" type="button">Search</button>
        </div>

        <div id="weather-card"></div>
    </div>
    `;
}

function addEvent() {
    const btn = document.getElementById('search-btn');
    btn.addEventListener('click', onClick);
}

function onClick(event) {
    event.preventDefault(); // prevent actual form submission
    const query = document.getElementById('search-input').value.trim();
    const apiKey = "QHUHRGANJWDZQGVYVX9QZNH3U";
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}?unitGroup=metric&key=${apiKey}&contentType=json`

    fetch(url, { mode: 'cors' })
        .then(res => res.json())
        .then(data => renderData(data))
        .catch(err => console.error(err));
}

function renderData(data) {
    const container = document.getElementById('weather-card');
    const iconCode = data.currentConditions.icon;
    console.log(iconCode);

    const iconClassMap = {
        "clear-day": "wi-day-sunny",
        "cloudy": "wi-cloudy",
        "rain": "wi-rain",
        "snow": "wi-snow",
    };

    const iconClass = iconClassMap[iconCode] || "wi-na";

    container.innerHTML = `
        <h2>${data.address}</h2>
        <p>${data.currentConditions.temp}°C</p>
        <i id="weather-icon" class="wi ${iconClass}"></i>
    `;
}

function main() {
    init();
    addEvent();
}

main();
