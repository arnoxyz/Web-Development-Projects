import "../css/styles.css";

function init() {
    document.body.innerHTML = `
    <div id="main">
        <h1>Weather App</h1>
            <input id="search-input" name="q" type="search" placeholder="Search for a location..." required>
            <button id="search-btn" type="button">Search</button>
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
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${query}/?key=${apiKey}`

    fetch(url, {mode: 'cors'})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

function main() {
    init();
    addEvent();
}

main();
