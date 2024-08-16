import { Restaurant } from '@prisma/client';

export class RestaurantEntity implements Restaurant {
  id: string;
  name: string;
  image: string;
  address: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
