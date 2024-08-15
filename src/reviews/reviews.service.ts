import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsRepository } from './repositories/reviews.repository';
import { ReviewEntity } from './entities/review.entity';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class ReviewsService {
  constructor(private readonly repository: ReviewsRepository) {}

  async create(createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    const { description } = createReviewDto;
    if (description.length > 500) {
      throw new BadRequestError('Descrição deve conter até 500 caracteres.');
    }
    return this.repository.create(createReviewDto);
  }

  async findAll(): Promise<ReviewEntity[]> {
    const reviews = await this.repository.findAll();
    if (reviews) {
      throw new NotFoundError('Nenhuma avaliação encontrada.');
    }
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<ReviewEntity> {
    const review = await this.repository.findOne(id);
    if (!review) {
      throw new NotFoundError('Avaliação não encontrada.');
    }
    return review;
  }

  async update(
    id: string,
    updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewEntity> {
    const isExist = await this.repository.findOne(id);
    const { description } = updateReviewDto;
    if (!isExist) {
      throw new NotFoundError('Avaliação não encontrada.');
    } else if (description.length > 500) {
      throw new BadRequestError(
        'Descrição do prato não pode ter mais de 500 caracteres',
      );
    }
    return this.repository.update(id, updateReviewDto);
  }

  async remove(id: string): Promise<ReviewEntity> {
    const isExist = await this.repository.findOne(id);
    if (!isExist) {
      throw new NotFoundError('Avaliação não encontrada.');
    }
    return await this.repository.remove(id);
  }
}
