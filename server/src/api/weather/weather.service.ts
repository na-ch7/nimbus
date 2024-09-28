import axios from 'axios';
import config from '../../config';
import { ERRORS } from '../../shared/errors';
import type { WeatherSchemaType } from './weather.schema';

const apiKey = config.API_KEY;

export async function getWeather(city: string): Promise<WeatherSchemaType> {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );

  const weatherData = response.data;
  const weather: WeatherSchemaType = {
    city: city,
    temperature: weatherData.main.temp,
    humidity: weatherData.main.humidity,
    windSpeed: weatherData.wind.speed,
    conditions: weatherData.weather[0].description,
  };

  if (!weather) {
    throw {
      statusCode: ERRORS.WEATHER_DATA_NOT_FOUND.statusCode,
      message: ERRORS.WEATHER_DATA_NOT_FOUND.message.error,
    };
  }

  return weather;
}
