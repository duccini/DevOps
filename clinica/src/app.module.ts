import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferralTypeModule } from './referral-type/referral-type.module';
import { PersonTypeModule } from './person-type/person-type.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    DocumentTypeModule,
    AppModule,
    PersonTypeModule,
    ReferralTypeModule,
    AppModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
