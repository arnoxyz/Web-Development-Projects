import "../css/styles.css";

function init() {
  document.body.innerHTML = `
    <div id="main">
        <div id="search">
            <h1>Weather App</h1>
            <input id="search-input" name="q" type="search" placeholder="Search for a location..." required>
            <button id="search-btn" type="button">Search</button>
        </div>

        <div id="weather-card">
          <i id="weather-icon" class="wi wi-rain"></i>
          <i id="weather-icon" class="wi wi-cloudy"></i>
          <i id="weather-icon" class="wi wi-snow"></i>
          <i id="weather-icon" class="wi wi-day-sunny"></i>
        </div>
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
    .then(res => {
      if (!res.ok) {
        renderNoDataFound();
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => { renderData(data); })
    .catch(err => console.error(err));

}
function renderData(data) {
  const container = document.getElementById('weather-card');
  const iconCode = data.currentConditions.icon;

  const iconClassMap = {
    "clear-day": "wi-day-sunny",
    "clear-night": "wi-night-clear",
    "partly-cloudy-day": "wi-day-cloudy",
    "partly-cloudy-night": "wi-night-alt-cloudy",
    "cloudy": "wi-cloudy",
    "rain": "wi-rain",
    "snow": "wi-snow",
    "sleet": "wi-sleet",
    "wind": "wi-windy",
    "fog": "wi-fog",
    "hail": "wi-hail",
    "thunderstorm": "wi-thunderstorm",
    "tornado": "wi-tornado",
    "hurricane": "wi-hurricane",
    "hot": "wi-hot",
    "cold": "wi-cold",
    "hail": "wi-hail",
    "lightning": "wi-lightning",
    "showers": "wi-showers",
    "drizzle": "wi-drizzle",
    "mist": "wi-mist",
    "smoke": "wi-smoke",
    "dust": "wi-dust",
    "sand": "wi-sandstorm",
    "ash": "wi-volcano",
    "squall": "wi-squall",
    "tornado": "wi-tornado",
    "hurricane": "wi-hurricane",
    "hot": "wi-hot",
    "cold": "wi-cold",
  };

  const iconClass = iconClassMap[iconCode] || "wi-na";

  container.innerHTML = `
        <h2>${data.address.toLowerCase()}</h2>
        <p>${data.currentConditions.temp} °C</p>
        <i id="weather-icon" class="wi ${iconClass}"></i>
    `;
}

function renderNoDataFound() {
  const container = document.getElementById('weather-card');

  container.innerHTML = `
        <i id="weather-icon" class="wi wi-rain"></i>
        <h2>No Data Found</h2>
        <i id="weather-icon" class="wi wi-rain"></i>
    `;
}

function main() {
  init();
  addEvent();
}

main();
