import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RestaurantsRepository } from './repositories/restaurants.repository';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService, PrismaService, RestaurantsRepository],
})
export class RestaurantsModule {}
