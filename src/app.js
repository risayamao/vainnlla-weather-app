function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "409fe5d78352336165401636211d618a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=tokyo&units=metric&appid=${apiKey}`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
