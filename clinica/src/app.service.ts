import { Injectable } from '@nestjs/common';

export interface HealthCheck {
  alive: boolean;
  timestamp: Date;
}

@Injectable()
export class AppService {
  healthCheck(): HealthCheck {
    return {
      alive: true,
      timestamp: new Date(),
    };
  }
}
