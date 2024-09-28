import { Router } from 'express';
import weatherController from './weather/weather.controller';
import testController from './test/test.controller';

export default (): Router => {
  const app = Router();

  app.use('/weather', weatherController());
  app.use('/test', testController());

  return app;
};
