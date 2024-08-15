import { Injectable } from '@nestjs/common';
import { CreateReviewsDishDto } from './dto/create-reviews-dish.dto';
import { UpdateReviewsDishDto } from './dto/update-reviews-dish.dto';
import { ReviewsDishesRepository } from './repositories/reviews-dishes.repository';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';
import { UsersRepository } from 'src/users/repositories/users.repository';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class ReviewsDishesService {
  constructor(
    private readonly repository: ReviewsDishesRepository,
    private readonly usersRepository: UsersRepository,
  ) {}

  async create(createReviewsDishDto: CreateReviewsDishDto) {
    const { description, userId } = createReviewsDishDto;

    const isUserExist = await this.usersRepository.findOne(userId);

    if (!isUserExist) {
      throw new NotFoundError('Usuário não encontrado.');
    }

    if (description.length > 500) {
      throw new BadRequestError('Descrição deve conter até 500 caracteres.');
    }

    return this.repository.create(createReviewsDishDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} reviewsDish`;
  }

  update(id: number, updateReviewsDishDto: UpdateReviewsDishDto) {
    return `This action updates a #${id} reviewsDish`;
  }

  remove(id: number) {
    return `This action removes a #${id} reviewsDish`;
  }
}
