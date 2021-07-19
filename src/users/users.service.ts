import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, name: 'john doe' },
    { id: 2, name: 'jane doe' },
  ];

  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  create(data) {
    const newUser = { id: this.users.length + 1, ...data };
    this.users.push(newUser);
    return newUser;
  }
}
