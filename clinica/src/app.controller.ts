import { Controller, Get } from '@nestjs/common';
import { AppService, HealthCheck } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly service: AppService) {}

  @Get()
  healthCheck(): HealthCheck {
    return this.service.healthCheck();
  }
}
