import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  name: string;
  image: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
