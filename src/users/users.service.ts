import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './models/dto/create-user.dto';
import { User } from './models/user-entity';
import { QuerySearch } from './utils/QueryParam';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, name: 'john doe', age: 25 },
    { id: 2, name: 'jane doe', age: 30 },
  ];

  findAll(query: QuerySearch): User[] {
    const compare = (a: string, b: string) =>
      a.toLocaleLowerCase().includes(b.toLocaleLowerCase());
    if (query) {
      if (query.name && query.age) {
        return this.users.filter(
          (u: User) => compare(u.name, query.name) && u.age === query.age,
        );
      } else if (query.name) {
        return this.users.filter((u: User) => compare(u.name, query.name));
      } else if (query.age) {
        return this.users.filter((u: User) => u.age == query.age);
      }
    }
    return this.users;
  }

  findById(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  create(createUserDto: CreateUserDto): User {
    const newUser = new User();
    newUser.id = this.users.length + 1;
    newUser.name = createUserDto.name;
    newUser.age = createUserDto.age;
    this.users.push(newUser);
    return newUser;
  }
}
