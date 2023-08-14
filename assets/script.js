// fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={289f6b778da2c131b82eefe9fcc7eb8e})
var fiveDayForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=289f6b778da2c131b82eefe9fcc7eb8e'

fetch(fiveDayForecast)
    .then(function (response) {
        return response.json();
    })
.then(function (data) {
    console.log("Is this even working?")
    console.log(data);
});