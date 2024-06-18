import { Injectable } from '@nestjs/common';
import { CreateReferralTypeDto } from './dto/create-referral-type.dto';
import { UpdateReferralTypeDto } from './dto/update-referral-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReferralTypeRepository } from './referral-type.repository';
import { ReferralType } from './referral-type.entity';

@Injectable()
export class ReferralTypeService {
  constructor(
    @InjectRepository(ReferralTypeRepository)
    private readonly repository:
    ReferralTypeRepository,
  ){}

  async create(description: string): Promise<void> {
    return await this.repository.createReferralType(description);
  }

  async update(id: number, description: string) {
    return await this.repository.updateReferralType(id, description);
  }

  async list(): Promise<ReferralType[]> {
    return await this.repository.list();
  }

  async getById(id: number) {
    return await this.repository.getById(id)
  }

  async delete(id: number) {
    return await this.repository.deleteReferralType(id);
  }
}