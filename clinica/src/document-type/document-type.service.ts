import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentTypeRepository } from './document-type.repository';
import { DocumentType } from './document-type.entity';

@Injectable()
export class DocumentTypeService {
  constructor(
    @InjectRepository(DocumentTypeRepository)
    private readonly repository: DocumentTypeRepository,
  ) {}

  async create(description: string): Promise<void> {
    return await this.repository.createDocumentType(description);
  }

  async list(): Promise<DocumentType[]> {
    return await this.repository.list();
  }

  async delete(id: number) {
    return await this.repository.deleteDocumentType(id);
  }

  async update(id: number, description: string) {
    return await this.repository.updateDocumentType(id, description);
  }

  async getById(id: number) {
    return await this.repository.getById(id);
  }
}
