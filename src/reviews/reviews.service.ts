import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { ReviewsRepository } from './repositories/reviews.repository';
import { ReviewEntity } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(private readonly repository: ReviewsRepository) {}

  create(createReviewDto: CreateReviewDto): Promise<ReviewEntity> {
    return this.repository.create(createReviewDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.repository.update(id, updateReviewDto);
  }

  async remove(id: string) {
    return await this.repository.remove(id);
  }
}
