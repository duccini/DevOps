import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ReferralTypeService } from './referral-type.service';
import { CreateReferralTypeDto } from './dto/create-referral-type.dto';
import { UpdateReferralTypeDto } from './dto/update-referral-type.dto';

@Controller('referral-type')
export class ReferralTypeController {
  constructor(private referralTypeService: ReferralTypeService) {}

  @Post()
  async create(
    @Body() createReferralTypeDto: CreateReferralTypeDto) {
    await this.referralTypeService.create(createReferralTypeDto.description);

    return{
      success: true,
      message: 'Tipo de documento criado com sucesso!'
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateReferralTypeDto: UpdateReferralTypeDto,
  ) {
    try {
      return await this.referralTypeService.update(id, updateReferralTypeDto.description);
    } catch (error) {
      return {
        message: error.message
      }
    }
  }

  @Get()
  async list() {
    return await this.referralTypeService.list();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.referralTypeService.getById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    console.log('ID', id);
    return this.referralTypeService.delete(id);
  }
}
