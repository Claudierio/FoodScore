import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { ConflictError } from 'src/common/errors/types/ConflictError';

@Injectable()
export class RestaurantsService {
  constructor(private readonly repository: RestaurantsRepository) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const { phone } = createRestaurantDto;

    const existingRestaurant = await this.repository.findByPhone(phone);
    if (existingRestaurant) {
      throw new ConflictError(
        'Este número de telefone já está em uso por outro restaurante.',
      );
    }

    return this.repository.create(createRestaurantDto);
  }

  findAll() {
    return `This action returns all restaurants`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
