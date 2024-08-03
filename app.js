const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "aac20632f53d12a84af0c8d7f4f5ce29";

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

const getCurretWeatherByName = async (city) => {
  const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const renderCurrentWeather = (data) => {
  console.log(data);
  const weatherJSx = `
  <h1>${data.name},${data.sys.country}</h1>
  `;
};

const searchHandler = async () => {
  const cityName = searchInput.value;

  if (!cityName) {
    alert("Please enter city name");
  }

  const currentData = await getCurretWeatherByName(cityName);
  //   console.log(currentData);
  renderCurrentWeather(currentData);
};

searchButton.addEventListener("click", searchHandler);
