import { Query, Resolver } from '@nestjs/graphql';

import { CoreService } from '../services/core.service';
import { CoreStatus } from '../models/core-status';

@Resolver()
export class CoreResolver {
  constructor(private service: CoreService) {}

  @Query(returns => CoreStatus)
  status() {
    return this.service.status();
  }
}
