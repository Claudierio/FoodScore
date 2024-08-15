import { Dish } from '@prisma/client';

export class DishEntity implements Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  restaurantId: string;
  createdAt: Date;
  updatedAt: Date;
}
