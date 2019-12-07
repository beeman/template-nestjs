import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { AppConfig } from './app.config';

async function bootstrap() {
  const globalPrefix = AppConfig.api.prefix;
  const port = AppConfig.api.port;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);

  await app.listen(port).then(() => {
    Logger.log(`Running in ${AppConfig.production ? 'production' : 'development'} mode`, 'Environment');
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix, 'RestAPI');
    Logger.log('Listening at http://localhost:' + port + '/graphql', 'GraphQL');
  });
}
bootstrap();
