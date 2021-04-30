import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return null;
  }

  @Get('/:id')
  getUser(id: string) {
    return null;
  }
}
