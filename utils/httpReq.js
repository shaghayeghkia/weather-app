import { showModal } from "./modal.js";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = "aac20632f53d12a84af0c8d7f4f5ce29";

const getWeatherData = async (type, data) => {
  let url = null;

  switch (type) {
    case "current":
      if (typeof data === "string") {
        url = `${BASE_URL}/weather?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
      break;
    case "forecast":
      if (typeof data === "string") {
        url = `${BASE_URL}/forecast?q=${data}&appid=${API_KEY}&units=metric`;
      } else {
        url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&appid=${API_KEY}&units=metric`;
      }
    default:
      url = `${BASE_URL}/weather?q=sanandaj&appid=${API_KEY}&units=metric`;
      break;
  }

  try {
    const response = await fetch(url);
    const json = await response.json();
    if (+json.code === 200) {
      return json;
    } else {
      showModal(json.message);
    }
  } catch (error) {
    showModal("An error occured when fetching data");
  }
};

export default getWeatherData;

// const getCurretWeatherByName = async (city) => {
//   const url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };
// const getCurretWeatherByCordinates = async (lat, lon) => {
//   const url = `${BASE_URL}/weather?lat=${data.lat}&lon=${data.lon}&appid=${API_KEY}&units=metric`;
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };

// const getForecastWeatherByName = async (city) => {
//   const url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };

// const getForecastWeatherByCordinates = async (lat, lon) => {
//   const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//   const response = await fetch(url);
//   const json = await response.json();
//   return json;
// };
