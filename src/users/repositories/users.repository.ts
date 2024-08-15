import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        reviewsRestaurant: {
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
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        reviewsRestaurant: {
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
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: {
        reviewsRestaurant: {
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
      },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: string) {
    return this.prisma.user.delete({
      where: { id },
      include: {
        reviewsRestaurant: {
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
      },
    });
  }
}
