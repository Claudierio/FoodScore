import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRestaurantDto } from '../dto/create-restaurant.dto';
import { UpdateRestaurantDto } from '../dto/update-restaurant.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({ data: createRestaurantDto });
  }

  async findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        reviews: {
          select: {
            id: true,
            rating: true,
            description: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            restaurant: {
              select: {
                id: true,
                name: true,
                address: true,
                phone: true,
              },
            },
          },
        },
        dishes: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.restaurant.findUnique({
      where: { id },

      include: {
        reviews: {
          select: {
            id: true,
            rating: true,
            description: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            restaurant: {
              select: {
                id: true,
                name: true,
                address: true,
                phone: true,
              },
            },
          },
        },
        dishes: true,
      },
    });
  }

  // apenas para checagem na hora de criar um restaurante, ainda não será uma rota
  async findByPhone(phone: string) {
    return this.prisma.restaurant.findUnique({ where: { phone } });
  }

  async update(id: string, updateRestaurantDto: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id },
      data: updateRestaurantDto,
    });
  }

  async remove(id: string) {
    return this.prisma.restaurant.delete({
      where: { id },
      include: {
        reviews: {
          select: {
            id: true,
            rating: true,
            description: true,
            createdAt: true,
            updatedAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
            restaurant: {
              select: {
                id: true,
                name: true,
                address: true,
                phone: true,
              },
            },
          },
        },
        dishes: true,
      },
    });
  }
}
