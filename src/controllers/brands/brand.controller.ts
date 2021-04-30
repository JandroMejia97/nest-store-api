import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandController {
  @Get()
  getBrands() {
    return null;
  }

  @Get('/:id')
  getBrand(id: string) {
    return null;
  }
}
