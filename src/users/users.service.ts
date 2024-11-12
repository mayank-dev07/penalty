import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'firstuser@gmail.com',
      role: 'Employee',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'seconduser@gmail.com',
      role: 'Intern',
    },
  ];

  findAll(role?: 'Intern' | 'Employee') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: { name: string; email: string; role: 'Intern' | 'Employee' }) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'Intern' | 'Employee';
    },
  ) {
    // const updatedUser = { id, ...user };
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removeUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);

    return removeUser;
  }
}
