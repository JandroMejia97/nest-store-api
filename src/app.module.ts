import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrderController } from './controllers/orders/order.controller';
import { UserController } from './controllers/user/user.controller';
import { ProductController } from './controllers/products/product.controller';
import { CategoryController } from './controllers/categories/category.controller';
import { BrandController } from './controllers/brands/brand.controller';
import { CustomerController } from './controllers/customers/customer.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    OrderController,
    BrandController,
    ProductController,
    CategoryController,
    CustomerController,
  ],
  providers: [AppService],
})
export class AppModule {}
