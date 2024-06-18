import { PersonType } from './person-type.entity';
import { DataSource, EntityRepository, Repository } from 'typeorm';

@EntityRepository(PersonType)
export class PersonTypeRepository extends Repository<PersonType> {
  constructor(private dataSource: DataSource) {
    super(PersonType, dataSource.createEntityManager());
  }

  async createPersonType(description: string) {
    try{
      const personType = this.create();
      personType.description = description;
      await personType.save();
    } catch (error) {
      console.log ('error', error.message);
      throw new Error ('Tipo pessoa duplicado!')
    }
  }

  async list(): Promise<PersonType[]> {
    return this.find();
  }

  async deletePersonType(id: number) {
    return this.delete(id);
  }

  async updatePersonType(id: number, description: string) {
    const PersonType = await this.findOneBy({id});

    if(!PersonType){
      throw new Error('Tipo Pessoa não encontrado!')
    }

    PersonType.description = description;
    await PersonType.save();
  }

  async getById (id: number) {
    return await this.findOneBy ({id});
  }
}