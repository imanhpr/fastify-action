import { randomBytes } from 'node:crypto';

export class User {
  constructor(
    public readonly Id: number,
    public readonly name: string,
    public readonly lastName: string,
  ) {}
}
export class UserService {
  readonly #users: User[] = [
    new User(1, 'Iman', 'Hpr'),
    new User(2, 'ali', 'hbw'),
  ];

  getAllUsers() {
    return this.#users;
  }
  createUser(name: string, lastName: string) {
    const id = parseInt(randomBytes(3).toString('hex'), 16);
    const user = new User(id, name, lastName);
    if (this.#users.length > 100)
      throw new Error('User Creation faild. maximum user amount');

    this.#users.push(user);
    return user;
  }

  getUserById(id: number) {
    return this.#users.filter((user) => user.Id === id).pop();
  }
}

const userService = new UserService();

export default userService;
