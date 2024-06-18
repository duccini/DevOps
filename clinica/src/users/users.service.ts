import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRole } from './user-roles.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async createAdminUser(createUserDto: CreateUserDto) {
    //}: Promise<User> {
    console.log('senha', createUserDto.password);
    console.log('confirmação', createUserDto.passwordConfirmation);
    console.log('this.userRepository', this.userRepository);

    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return await this.userRepository.createUser(
        createUserDto,
        UserRole.ADMIN,
      );
    }
  }
}
