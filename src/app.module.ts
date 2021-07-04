import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrderController } from './controllers/orders/order.controller';
import { UserController } from './controllers/users/user.controller';
import { ProductController } from './controllers/products/product.controller';
import { CategoryController } from './controllers/categories/category.controller';
import { BrandController } from './controllers/brands/brand.controller';
import { CustomerController } from './controllers/customers/customer.controller';
import { BrandService } from './services/brands/brand.service';
import { CategoryService } from './services/categories/category.service';
import { CustomerService } from './services/customers/customer.service';
import { OrderService } from './services/orders/order.service';
import { ProductService } from './services/products/product.service';
import { UserService } from './services/users/user.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductsModule, UsersModule],
  controllers: [
    AppController,
    UserController,
    OrderController,
    BrandController,
    ProductController,
    CategoryController,
    CustomerController,
  ],
  providers: [AppService, BrandService, CategoryService, CustomerService, OrderService, ProductService, UserService],
})
export class AppModule {}
