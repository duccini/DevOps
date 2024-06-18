import { Module } from '@nestjs/common';
import { ReferralTypeService } from './referral-type.service';
import { ReferralTypeController } from './referral-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReferralTypeRepository } from './referral-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReferralTypeRepository])],
  providers: [ReferralTypeService, ReferralTypeRepository],
  controllers: [ReferralTypeController],
  exports: [ReferralTypeService, ReferralTypeRepository]
})

export class ReferralTypeModule {}
