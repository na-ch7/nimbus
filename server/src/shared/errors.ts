export const ERRORS = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: {
      error: 'Internal Server Error',
      error_description: 'Something went wrong',
    },
  },
  WEATHER_DATA_NOT_FOUND: {
    statusCode: 500,
    message: {
      error: 'Weather data not found',
      error_description: 'Error fetching weather data',
    },
  },
};
