import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './models/dto/create-user.dto';
import { User } from './models/user-entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'john doe' },
    { id: 2, name: 'jane doe' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User {
    return this.users.find((u) => u.id === id);
  }

  create(createUserDto: CreateUserDto): User {
    const newUser = { id: this.users.length + 1, ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
