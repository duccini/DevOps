import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PersonTypeService } from './person-type.service';
import { PersonTypeController } from './person-type.controller';
import { PersonTypeRepository } from './person-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PersonTypeRepository])],
  providers: [PersonTypeService, PersonTypeRepository],
  controllers: [PersonTypeController],
  exports: [PersonTypeService, PersonTypeRepository]
})

export class PersonTypeModule {}
