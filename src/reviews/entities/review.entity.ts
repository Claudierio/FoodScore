import { Review } from '@prisma/client';

export class ReviewEntity implements Review {
  id: string;
  rating: number;
  description: string;
  userId: string;
  restaurantId: string;
  createdAt: Date;
  updatedAt: Date;
}
