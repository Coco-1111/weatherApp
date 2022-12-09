let weather = {
    "apiKey": "6d095bcd2c8af4cfa16b9a2c446909f1"
    fethcWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey "6d095bcd2c8af4cfa16b9a2c446909f1")
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        var { city } = data;
        var { icon, description } = data.weather[0];
        var { temp, humidity } = data.main;
        var { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in" + name;
        document.querySelector(".icon").src = "https://developer.accuweather.com/sites/default/files/07-s.png"
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "m/hr";
        document.querySelector(".uvIndex").innerText = "UV Index: " + uvIndex;
    }
    search: funtion () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

localStorage.setItem("city", "description", "temp", "humidity", "speed" );

document.querySelector(".search button").addEventListener("click", function () {
    document.querySelector(".search-bar").addEventListener("")
    if ()
        weather.search();
});