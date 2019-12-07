import { Module } from '@nestjs/common';

import { CoreResolver } from './resolvers/core.resolver';
import { DateScalar } from './scalars/date.scalar';
import { CoreService } from './services/core.service';
import { CoreController } from './controllers/core.controller';

@Module({
  providers: [CoreResolver, CoreService, DateScalar],
  controllers: [CoreController],
})
export class CoreModule {}
