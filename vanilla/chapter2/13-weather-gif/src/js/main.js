import "../css/styles.css";
import NotFoundGif from "../assets/gifs/404.gif";
import SearchGif from "../assets/gifs/search.gif";


function init() {
  document.body.innerHTML = `
    <div id="main">
        <div id="search">
            <h1>Weather App</h1>
            <input id="search-input" name="q" type="search" placeholder="Search for a location..." required>
            <button id="search-btn" type="button">Search</button>
        </div>

        <div id="weather-card">
          <img src="${SearchGif}" />
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

  //fetch weather data
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
  //fetch gif from data
  const iconCode = data.currentConditions.icon;

  const apiKey = "cZypcvjmrNxyBNbV2gbHF8UcsTAeFJ1m";
  let url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${iconCode}`

  fetch(url, { mode: 'cors' })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => { renderGif(data, iconCode) })
    .catch(err => console.error(err));

}

function renderNoDataFound() {
  //fetch 404 gif from gimpy
  const container = document.getElementById('weather-card');

  container.innerHTML = `
        <div id="weather-card">
          <h1>Destination not found...</h1>
          <img src="${NotFoundGif}" />
        </div>
    `;
}

function renderGif(data, iconCode) {
  const container = document.getElementById('weather-card');
  const img = document.querySelector('img');
  console.log(data);
  console.log(data.data.images);
  let info = data.data.images.fixed_height;

  container.innerHTML = `
        <p>${iconCode}</p>
        <img src="${info.url}" alt="${info.alt_text}" width="${info.width}" height="${info.height}" />
    `;

}

function main() {
  init();
  addEvent();
}

main();
