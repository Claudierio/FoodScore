import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsRepository } from './repositories/reviews.repository';
import { ReviewEntity } from './entities/review.entity';
import { BadRequestError } from 'src/common/errors/types/BadRequestError';

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
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<ReviewEntity> {
    return this.repository.findOne(id);
  }

  async update(
    id: string,
    updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewEntity> {
    return this.repository.update(id, updateReviewDto);
  }

  async remove(id: string): Promise<ReviewEntity> {
    return await this.repository.remove(id);
  }
}
