import { z } from 'zod';

export const weatherSchema = z.object({
  city: z.string(),
  temperature: z.string(),
  humidity: z.string(),
  windSpeed: z.string(),
  conditions: z.string(),
});

export type WeatherSchemaType = z.infer<typeof weatherSchema>;
