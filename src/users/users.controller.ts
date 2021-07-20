import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './models/dto/create-user.dto';
import { User } from './models/user-entity';
import { UsersService } from './users.service';
import { QuerySearch } from './utils/QueryParam';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: User, isArray: true })
  @ApiQuery({ name: 'name', required: false })
  @ApiQuery({ name: 'age', required: false })
  @Get()
  getUsers(@Query() query: QuerySearch): User[] {
    return this.usersService.findAll(query);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ status: 404, description: 'User not found' })
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number): User {
    return this.usersService.findById(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({ description: 'Validations errors' })
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }
}
