$( document ).ready(function() {
// create a function for search button 
$('.search').on('click',function() {

  //empty info div
  $('.card-body').empty();
  $('#currentCity').empty();
// create variables for dom elements
var currentCity = $('#currentCity');
var dayOne = $('.dayOne');
var dayTwo = $('.dayTwo');
var dayThree = $('.dayThree');
var dayFour = $('.dayFour');
var dayFive = $('.dayFive');

var queryTerm = $('#search').val().trim();
// api key and url
var apiKey = "9f63c28382cdbc8f80192a14b052668e";
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + queryTerm + "&appid=" + apiKey;

    // ajax api request
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      // temperature calculation from response
      var temp = Math.floor(response.main.temp - 273.15) * 1.80 + 32; 
      // create elements and append to the page 
      var cityName = $('<h2>').text(response.name);
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
      cityName.append(weatherIcon);
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.main.humidity + '%');
      var cityWindSpeed = $("<p>").text('Wind Speed: ' + response.wind.speed + 'MPH');
      console.log(cityTemp);
      currentCity.append(cityName, cityTemp, cityHumidity, cityWindSpeed);
    // uvi api request
    var uvInfo = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
    $.ajax({
      url: uvInfo,
      method: "GET"
    }).then(function(uvi) {

      var uviValue = $('<span>').text(uvi.value);
      var cityUvi = $('<p>').text('UV Index: ');
      cityUvi.append(uviValue); 
      currentCity.append(cityUvi);
      uviValue.css({'background': 'red', 'padding': '4px', 'border-radius': '5px'});
    })
    // 5 day api request
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&appid=" + apiKey;
    $.ajax({
      url: forecastUrl,
      method: "GET"
    }).then(function(response) {
      // day 0ne
      var temp = Math.floor(response.list[4].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[4].main.humidity + '%');
      dayOne.append(weatherIcon, cityTemp, cityHumidity);
      // day two
      var temp = Math.floor(response.list[12].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[12].main.humidity + '%');
      dayTwo.append(weatherIcon, cityTemp, cityHumidity);
      //day three
      var temp = Math.floor(response.list[20].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[20].main.humidity + '%');
      dayThree.append(weatherIcon, cityTemp, cityHumidity);
      // day four
      var temp = Math.floor(response.list[28].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[28].main.humidity + '%');
      dayFour.append(weatherIcon, cityTemp, cityHumidity);
      // day five
      var temp = Math.floor(response.list[36].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[36].main.humidity + '%');
      dayFive.append(weatherIcon, cityTemp, cityHumidity);
    });
  });
})

$('.city').on('click',function() {
  //empty info div
  $('.card-body').empty();
  $('#currentCity').empty();
  // create variables for dom elements
  var currentCity = $('#currentCity');
  var queryTerm = $(this).attr("value");
  var dayOne = $('.dayOne');
var dayTwo = $('.dayTwo');
var dayThree = $('.dayThree');
var dayFour = $('.dayFour');
var dayFive = $('.dayFive');
  // api key and url
  var apiKey = "9f63c28382cdbc8f80192a14b052668e";
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + queryTerm + "&appid=" + apiKey;
      // ajax api request
      $.ajax({
        url: queryUrl,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        // temperature calculation from response
        var temp = Math.floor(response.main.temp - 273.15) * 1.80 + 32;
        // create elements and append to the page 
        var cityName = $('<h2>').text(response.name);
        var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
        cityName.append(weatherIcon);
        var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
        var cityHumidity = $('<p>').text('Humidity: ' + response.main.humidity + '%');
        var cityWindSpeed = $("<p>").text('Wind Speed: ' + response.wind.speed + 'MPH');
        currentCity.append(cityName, cityTemp, cityHumidity, cityWindSpeed);

        var uvInfo = "https://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon;
         $.ajax({
          url: uvInfo,
          method: "GET"
        }).then(function(uvi) {
          var uviValue = $('<span>').text(uvi.value);
          var cityUvi = $('<p>').text('UV Index: ');
          cityUvi.append(uviValue); 
          currentCity.append(cityUvi);
          uviValue.css({'background': 'red', 'padding': '4px', 'border-radius': '5px'});
        })

        // 5 day api request
    var forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + queryTerm + "&appid=" + apiKey;
    $.ajax({
      url: forecastUrl,
      method: "GET"
    }).then(function(response) {
      // day 0ne
      var temp = Math.floor(response.list[4].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[4].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[4].main.humidity + '%');
      dayOne.append(weatherIcon, cityTemp, cityHumidity);
      // day two
      var temp = Math.floor(response.list[12].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[12].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[12].main.humidity + '%');
      dayTwo.append(weatherIcon, cityTemp, cityHumidity);
      //day three
      var temp = Math.floor(response.list[20].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[20].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[20].main.humidity + '%');
      dayThree.append(weatherIcon, cityTemp, cityHumidity);
      // day four
      var temp = Math.floor(response.list[28].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[28].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[28].main.humidity + '%');
      dayFour.append(weatherIcon, cityTemp, cityHumidity);
      // day five
      var temp = Math.floor(response.list[36].main.temp - 273.15) * 1.80 + 32; 
      var weatherIcon = $('<img>').attr("src", "https://openweathermap.org/img/w/" + response.list[36].weather[0].icon + ".png")
      var cityTemp = $('<p>').text('Temperature: ' + temp + '°F');
      var cityHumidity = $('<p>').text('Humidity: ' + response.list[36].main.humidity + '%');
      dayFive.append(weatherIcon, cityTemp, cityHumidity);
    });
      });
  })
  
});
