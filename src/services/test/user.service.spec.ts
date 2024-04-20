import { describe, test, expect } from 'vitest';
import { User, UserService } from '../user.service.js';

describe('User Service tests', () => {
  const userService = new UserService();

  test('Get users happy path', () => {
    const result = userService.getAllUsers();
    expect(result).toStrictEqual([
      new User(1, 'Iman', 'Hpr'),
      new User(2, 'ali', 'hbw'),
    ]);
  });

  test('Get user by id', () => {
    const result = userService.getUserById(1);
    expect(result).toStrictEqual(new User(1, 'Iman', 'Hpr'));
  });
});
