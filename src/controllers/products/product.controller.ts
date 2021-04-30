import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  getProducts() {
    return null;
  }

  @Get('/:id')
  getProduct(id: string) {
    return null;
  }
}
