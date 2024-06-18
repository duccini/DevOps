import { DocumentType } from './document-type.entity';
import { DataSource, EntityRepository, Repository } from 'typeorm';

@EntityRepository(DocumentType)
export class DocumentTypeRepository extends Repository<DocumentType> {
  constructor(private dataSource: DataSource) {
    super(DocumentType, dataSource.createEntityManager());
  }

  async createDocumentType(description: string) {
    try {
      const documentType = this.create();
      documentType.description = description;
      await documentType.save();
    } catch (error) {
      console.log('error', error.message);
      throw new Error('Tipo de documento duplicado!');
    }
  }

  async list(): Promise<DocumentType[]> {
    return this.find();
  }

  async deleteDocumentType(id: number) {
    return this.delete(id);
  }

  async updateDocumentType(id: number, description: string) {
    const documentType = await this.findOneBy({ id });

    if (!documentType) {
      throw new Error('Tipo de documento não encontrado!');
    }

    documentType.description = description;
    await documentType.save();
  }

  async getById(id: number) {
    return await this.findOneBy({ id });
  }
}

// list
// getById
// delete
// create
// update
