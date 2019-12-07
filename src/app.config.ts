import * as dotenv from 'dotenv';

dotenv.config();

export class AppConfig {
  static production = process.env.NODE_ENV !== 'development';
  static api = {
    port: process.env.PORT || 3000,
    url: process.env.API_URL || 'http://localhost:4000',
    prefix: 'api',
  };
}
