import { TypeOf } from 'zod';
import { zodEnv } from '@/environment/local';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends TypeOf<typeof zodEnv> {}
  }
}
