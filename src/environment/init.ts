import { z } from 'zod';
import { zodEnv } from './local';

export const initEnvironmentVariables = () => {
  try {
    zodEnv.parse(process.env);
  } catch (err) {
    if (err instanceof z.ZodError) {
      const { fieldErrors } = err.flatten();
      const errorMessage = Object.entries(fieldErrors)
        .map(([field, errors]) =>
          errors ? `${field}: ${errors.join(', ')}` : field
        )
        .join('\n  ');
      throw new Error(`Missing environment variables:\n  ${errorMessage}`);
      process.exit(1);
    }
  }
};
