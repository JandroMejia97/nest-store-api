import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get()
  getCategories(
    @Query('limit') limit = 50,
    @Query('offset') offset = 0
  ) {
    return null;
  }

  @Get(':id')
  getCategory(
    @Param('id') id: number
  ) {
    return null;
  }
}
