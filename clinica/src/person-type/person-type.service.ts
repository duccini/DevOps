import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonTypeRepository } from './person-type.repository';
import { PersonType } from './person-type.entity';

@Injectable()
export class PersonTypeService {
    constructor(
        @InjectRepository(PersonTypeRepository)
        private readonly repository: PersonTypeRepository,
    ) { }

    async create(description: string): Promise<void> {
        return await this.repository.createPersonType(description);
    }

    async list(): Promise<PersonType[]> {
        return await this.repository.list();
    }
    
    async delete (id: number) {
        return await this.repository.deletePersonType(id);
    }

    async update (id: number, description: string) {
        return await this.repository.updatePersonType(id, description);
    }

    async getById (id: number) {
        return await this.repository.getById (id);
    }
}