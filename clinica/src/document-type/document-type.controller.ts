import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { DocumentTypeService } from './document-type.service';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Controller('document-type')
export class DocumentTypeController {
  constructor(private service: DocumentTypeService) {}

  @Post()
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    await this.service.create(createDocumentTypeDto.description);

    return {
      success: true,
      message: 'Tipo de documento criado com sucesso!',
    };
  }

  @Get()
  async list() {
    return await this.service.list();
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    console.log('ID', id);
    return this.service.delete(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDocumentTypeDto: UpdateDocumentTypeDto,
  ) {
    try {
      return await this.service.update(id, updateDocumentTypeDto.description);
    } catch (error) {
      return {
        message: error.message,
      };
    }
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return await this.service.getById(id);
  }
}
