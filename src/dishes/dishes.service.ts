import { Injectable } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { DishesRepository } from './repositories/dishes.repository';
import { ConflictError } from 'src/common/errors/types/ConflictError';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';
import { DishEntity } from './entities/dish.entity';

@Injectable()
export class DishesService {
  constructor(private readonly repository: DishesRepository) {}

  async create(createDishDto: CreateDishDto): Promise<DishEntity> {
    return this.repository.create(createDishDto);
  }

  async findAll(): Promise<DishEntity[]> {
    const dishes = await this.repository.findAll();
    if (dishes.length === 0) {
      throw new NotFoundError('Pratos não encontrados.');
    }
    return dishes;
  }

  async findOne(id: string): Promise<DishEntity> {
    const dish = await this.repository.findOne(id);
    if (!dish) {
      throw new NotFoundError('Prato não encontrado.');
    }
    return dish;
  }

  async update(id: string, updateDishDto: UpdateDishDto): Promise<DishEntity> {
    const isExist = await this.repository.findOne(id);
    if (!isExist) {
      throw new NotFoundError('Prato não encontrado.');
    }
    return this.repository.update(id, updateDishDto);
  }

  async remove(id: string): Promise<DishEntity> {
    const isExist = await this.repository.findOne(id);
    if (!isExist) {
      throw new NotFoundError('Prato não encontrado.');
    }
    return this.repository.remove(id);
  }
}
