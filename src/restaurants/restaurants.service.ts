import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantsRepository } from './repositories/restaurants.repository';
import { ConflictError } from 'src/common/errors/types/ConflictError';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { RestaurantEntity } from './entities/restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(private readonly repository: RestaurantsRepository) {}

  async create(
    createRestaurantDto: CreateRestaurantDto,
  ): Promise<RestaurantEntity> {
    const { phone } = createRestaurantDto;

    const existingRestaurant = await this.repository.findByPhone(phone);
    if (existingRestaurant) {
      throw new ConflictError(
        'Este número de telefone já está em uso por outro restaurante.',
      );
    }

    return this.repository.create(createRestaurantDto);
  }

  async findAll(): Promise<RestaurantEntity[]> {
    const restaurants = await this.repository.findAll();
    if (restaurants.length === 0) {
      throw new NotFoundError('Nenhum restaurante encontrado.');
    }
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<RestaurantEntity> {
    const restaurant = await this.repository.findOne(id);
    if (!restaurant) {
      throw new NotFoundError('Restaurante não encontrado.');
    }
    return restaurant;
  }

  async update(
    id: string,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<RestaurantEntity> {
    const isExist = await this.repository.findOne(id);
    if (!isExist) {
      throw new NotFoundError('Restaurante não encontrado.');
    }
    return this.repository.update(id, updateRestaurantDto);
  }

  async remove(id: string): Promise<RestaurantEntity> {
    const isExist = await this.repository.findOne(id);
    if (!isExist) {
      throw new NotFoundError('Restaurante não encontrado.');
    }
    return this.repository.remove(id);
  }
}
