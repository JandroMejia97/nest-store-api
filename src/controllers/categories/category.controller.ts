import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get()
  getCategories() {
    return null;
  }

  @Get('/:id')
  getCategory(id: string) {
    return null;
  }
}
