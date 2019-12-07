import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { CoreModule } from './core';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './src/schema.graphql',
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      context: ({ req, res, connection }) => {
        req = connection ? { headers: connection.context } : req;
        return { req, connection, res };
      },
    }),
    CoreModule,
  ],
})
export class AppModule {}
