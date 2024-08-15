import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewRestaurantDto } from '../dto/create-reviewRestaurant.dto';
import { UpdateReviewRestaurantDto } from '../dto/update-reviewRestaurant.dto';

@Injectable()
export class ReviewsRestaurantsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createReviewRestaurantDto: CreateReviewRestaurantDto) {
    return this.prisma.reviewRestaurant.create({
      data: createReviewRestaurantDto,
    });
  }

  async findAll() {
    return await this.prisma.reviewRestaurant.findMany();
  }

  async findOne(id: string) {
    return this.prisma.reviewRestaurant.findUnique({ where: { id } });
  }

  async update(
    id: string,
    updateReviewRestaurantDto: UpdateReviewRestaurantDto,
  ) {
    return this.prisma.reviewRestaurant.update({
      where: { id },
      data: updateReviewRestaurantDto,
    });
  }

  async remove(id: string) {
    return this.prisma.reviewRestaurant.delete({ where: { id } });
  }
}
