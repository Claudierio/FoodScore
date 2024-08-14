import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReviewsRepository } from './repositories/reviews.repository';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService, PrismaService, ReviewsRepository],
})
export class ReviewsModule {}
