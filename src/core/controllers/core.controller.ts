import { Controller, Get } from '@nestjs/common';
import { CoreService } from '../services/core.service';

@Controller()
export class CoreController {
  constructor(private service: CoreService) {}

  @Get('status')
  status() {
    return this.service.status();
  }
}
