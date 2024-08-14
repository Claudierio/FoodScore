import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { LoginUserDto } from './dto/login-user.dto';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly repository: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    const userExists = await this.repository.findByEmail(email);
    if (userExists) {
      throw new ConflictException('Email já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    createUserDto.password = hashedPassword;

    return this.repository.create(createUserDto);
  }

  async findAll() {
    const users = await this.repository.findAll();
    if (users.length === 0) {
      throw new NotFoundError('Nenhum usuário encontrado.');
    }
    return users;
  }

  async findOne(id: string) {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    updateUserDto.password = hashedPassword;

    return this.repository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const user = await this.repository.findOne(id);
    if (!user) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    return this.repository.remove(id);
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;

    const user = await this.repository.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h',
      },
    );

    return {
      data: user,
      message: 'Login efetuado com sucesso',
      token,
    };
  }
}
