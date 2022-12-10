let searchBtn = document.querySelector('#searchBtn');
let searchInput = document.querySelector('.search-bar');
let cityNameEl = document.querySelector('#city-name');
let cityTempEl = document.querySelector('.temp');
let descriptionEl = document.querySelector('.description');
let humidityEl = document.querySelector('#humid');
let windEl = document.querySelector('#wind-speed');
let uvIndexEl = document.querySelector('#uv-index');
let weatherImgEl = document.querySelector('#weather-icon');

function printCityWeather(weather) {
  cityNameEl.textContent = weather.name;
  cityTempEl.textContent = weather.main.temp + ' °F';
  descriptionEl.textContent = weather.weather[0].description;
  humidityEl.textContent = weather.main.humidity;
  windEl.textContent = weather.wind.speed;
  weatherImgEl.src =
    'https://openweathermap.org/img/w/' + weather.weather[0].icon + '.png';
}

function cityCurrentWeather(city) {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&units=imperial&appid=' +
      '6d095bcd2c8af4cfa16b9a2c446909f1',
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      printCityWeather(data);
    });
}

function saveCityToLocalStorage(city) {
  let cityValues = [];

  if (localStorage.getItem('city-names')) {
    cityValues = JSON.parse(localStorage.getItem('city-names'));
  }

  cityValues.push(city);
  localStorage.setItem('city-names', JSON.stringify(cityValues));
}

function searchCityWeather() {
  let city = searchInput.value;
  cityCurrentWeather(city);
  saveCityToLocalStorage(city);
}

searchBtn.addEventListener('click', searchCityWeather);