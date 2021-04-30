import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrderController {
  @Get()
  getOrders() {
    return null;
  }

  @Get('/:id')
  getOrder(id: string) {
    return null;
  }
}
