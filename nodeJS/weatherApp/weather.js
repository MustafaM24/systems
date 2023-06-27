const axios = require('axios');
const readline = require('readline');

const API_KEY = 'bb1bf0f5cc5d5bd5c991ef782a15d75a'; // Replace with your OpenWeatherMap API key

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getWeather(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

  axios.get(url)
    .then(response => {
      const weatherData = response.data;
      const temperature = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;

      console.log(`Temperature in ${city}: ${Math.round(temperature - 273.15)}°C`);
      console.log(`Weather description: ${weatherDescription}`);
      console.log('-----------------------------------');

      promptUser();
    })
    .catch(error => {
      console.log('Error occurred while fetching weather data:', error.message);
      console.log('Please try again.');
      console.log('-----------------------------------');

      promptUser();
    });
}

function promptUser() {
  rl.question('Enter a city name (or type "exit" to quit): ', city => {
    if (city.toLowerCase() === 'exit') {
      console.log('Exiting the weather application.');
      rl.close();
    } else {
      getWeather(city);
    }
  });
}

console.log('Weather Application');
console.log('-----------------------------------');
promptUser();
