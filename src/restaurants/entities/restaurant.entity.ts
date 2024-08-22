import { Restaurant } from '@prisma/client';

export class RestaurantEntity implements Restaurant {
  id: string;
  name: string;
  image: string;
  address: string;
  phone: string;
  openingTime: string; 
  closingTime: string; 
  createdAt: Date;
  updatedAt: Date;
}
