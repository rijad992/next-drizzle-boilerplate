import { z } from 'zod';

export const zodEnv = z.object({
  POSTGRES_HOST: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string(),
  NEXT_AUTH_SECRET: z.string(),
});
