import { DataSource, EntityRepository, Repository } from "typeorm";
import { ReferralType } from "./referral-type.entity";

@EntityRepository(ReferralType)
export class ReferralTypeRepository extends Repository<ReferralType> {
    constructor(private dataSource: DataSource){
        super(ReferralType, dataSource.createEntityManager());
    }

    async createReferralType(description: string) {
        try {
            const referralType = this.create();
            referralType.description = description;
            await referralType.save();
        } catch (error) {
            console.log('error', error.message);
            throw new Error('Tipo de documento duplicado!')
        }
    }

    async updateReferralType(id: number, description: string) {
        const referralType = await this.findOneBy({ id });
    
        if(!referralType){
          throw new Error('Tipo de documento não encontrado!')
        }
    
        referralType.description = description;
        await referralType.save();
    }

    async getById(id: number) {
        return await this.findOneBy({ id });
    }

    async list(): Promise<ReferralType[]> {
        return this.find();
    }

    async deleteReferralType(id: number) {
        return this.delete(id);
    }
}