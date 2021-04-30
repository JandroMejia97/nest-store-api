import { Controller, Get } from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  @Get()
  getCustomers() {
    return null;
  }

  @Get('/:id')
  getCustomer(id: string) {
    return null;
  }
}
