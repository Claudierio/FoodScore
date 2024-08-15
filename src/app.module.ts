import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DishesModule } from './dishes/dishes.module';
import { ReviewsRestaurantModule } from './reviewsRestaurant/reviewsRestaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RestaurantsModule,
    ReviewsRestaurantModule,
    DishesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
