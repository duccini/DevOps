import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DocumentTypeService } from './document-type.service';
import { DocumentTypeController } from './document-type.controller';
import { DocumentTypeRepository } from './document-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentTypeRepository])],
  providers: [DocumentTypeService, DocumentTypeRepository],
  controllers: [DocumentTypeController],
  exports: [DocumentTypeService, DocumentTypeRepository],
})
export class DocumentTypeModule {}
