import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  NODE_ENV: z.string(),
  API_KEY: z.string(),
});

const env = envSchema.parse(process.env);
export type EnvSchemaType = z.infer<typeof envSchema>;

export default {
  PORT: env.PORT,
  NODE_ENV: env.NODE_ENV,
  API_KEY: env.API_KEY,
  logs: {
    level: process.env.LOG_LEVEL || 'hi',
  },
  api: {
    prefix: '/api',
  },
};
