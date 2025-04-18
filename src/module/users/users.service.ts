import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private users = [
    {
      userId: '1',
      username: 'sam',
      password: '123456',
    },
    {
      userId: '2',
      username: 'long',
      password: '123456',
    },
    {
      userId: '3',
      username: 'huo',
      password: '123456',
    },
  ];
  async findOne(username: string, password: string): Promise<User | undefined> {
    console.log(username, password);
    return this.users.find(
      (user) => user.username === username && user.password === password,
    );
  }
}
