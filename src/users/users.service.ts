import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    return this.repository.create(createUserDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.repository.update(id, updateUserDto);
  }

  async remove(id: string) {
    return this.repository.remove(id);
  }
}
