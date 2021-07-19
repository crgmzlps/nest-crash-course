import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {
    return [{ id: 1 }];
  }
  @Get(':id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
