import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './models/dto/create-user.dto';
import { User } from './models/user-entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @Get()
  getUsers(): User[] {
    return this.usersService.findAll();
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    return this.usersService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }
}
