import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { MESSAGES } from '../../shared/constants';
import { getWeather } from './weather.service';

export const handleGetWeather = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { city } = req.body;
  try {
    const data = await getWeather(city);
    res.status(200).json({
      success: true,
      message: MESSAGES.FETCHED_WEATHER,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.get('/', handleGetWeather);
  return app;
};
