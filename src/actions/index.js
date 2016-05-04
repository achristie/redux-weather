import axios from 'axios';

const API_KEY = 'b15627cd22a26a951fc8afc0873d224c';
const URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode = 'us') {
  const url = `${URL}&q=${city},${countryCode}`;
  const req = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: req
  };
}