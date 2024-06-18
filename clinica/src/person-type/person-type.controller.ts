import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatePersonTypeDto } from './dto/create-person-type.dto';
import { PersonTypeService } from './person-type.service';
import { UpdatePersonTypeDto } from './dto/update-person-type.dto';

@Controller('person-type')
export class PersonTypeController {
  constructor(private service: PersonTypeService) { }

  @Post()
  async create(
    @Body() createPersonTypeDto: CreatePersonTypeDto,
  ) {
    await this.service.create(createPersonTypeDto.description);
    
    return {
      success: true,
      message: 'Tipo Pessoa criado com sucesso!'
    }
    }

    @Get()
    async list() {
      return await this.service.list();
   }

    @Delete(':id')
    async delete (@Param('id') id: number) {
      console.log("ID", id);
      return this.service.delete(id);
    }

    @Put (':id')
    async update(
      @Param('id') id:number,
      @Body() UpdatePersonTypeDto: UpdatePersonTypeDto,
    ) {
      try {
        return await this.service.update(id, UpdatePersonTypeDto.description);
      } catch (error) {
        return {
          message: error.message
        }
       }
      }
    @Get(':id')
    async getById (@Param('id') id: number) {
      return await this.service.getById(id);
    }
  }
  