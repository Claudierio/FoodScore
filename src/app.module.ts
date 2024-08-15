import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { DishesModule } from './dishes/dishes.module';
import { ReviewsDishesModule } from './reviews-dishes/reviews-dishes.module';
import { ReviewsRestaurantModule } from './reviews-restaurant/reviewsRestaurant.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    RestaurantsModule,
    ReviewsRestaurantModule,
    DishesModule,
    ReviewsDishesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
