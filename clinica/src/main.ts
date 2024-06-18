import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ABDIM API')
    .setDescription('API para expor os endpoints do projeto')
    .setVersion('1.0')
    .addTag('users')
    .addTag('document-type')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
