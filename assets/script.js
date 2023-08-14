// fetch(api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={289f6b778da2c131b82eefe9fcc7eb8e})
var fiveDayForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=289f6b778da2c131b82eefe9fcc7eb8e';
var searchButton = document.querySelector('#search-button');
var searchInput = document.querySelector('#search-input');
var savedSearch = document.querySelector('#stored-cities');

// search input prints to corresponding div
function citySearch() {
    event.preventDefault();
    var cityName = searchInput.value;
    var newDiv = document.createElement("div");
    newDiv.className ="border rounded text-center p-2"
    newDiv.textContent = cityName;

    // adds the new city div to the specified location
    savedSearch.appendChild(newDiv);

}



fetch(fiveDayForecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log('temperature: \n------------');
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
        }
    });

// fetch(fiveDayForecast)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {



//     });

// search button
searchButton.addEventListener('click', citySearch)