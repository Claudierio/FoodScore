import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { RestaurantEntity } from '../entities/restaurant.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<RestaurantEntity> {
    return this.prisma.restaurant.create({ data: createRestaurantDto });
  }

  async findAll(): Promise<RestaurantEntity[]> {
    return this.prisma.restaurant.findMany();
  }

  async findOne(id: string): Promise<RestaurantEntity> {
    return this.prisma.restaurant.findUnique({ where: { id } });
  }

  // apenas para checagem, ainda não será uma rota
  async findByPhone(phone: string) {
    return this.prisma.restaurant.findUnique({ where: { phone } });
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<RestaurantEntity> {
    return this.prisma.restaurant.update({
      where: { id },
      data: updateRestaurantDto,
    });
  }

  async remove(id: string): Promise<RestaurantEntity> {
    return this.prisma.restaurant.delete({ where: { id } });
  }
}
