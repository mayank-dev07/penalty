import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * UsersController is responsible for handling user-related HTTP requests.
 * It is mapped to the 'users' route.
 */
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get() // get /users
  findAll(@Query('role') role?: 'Intern' | 'Employee') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // get /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // post /users
  create(
    @Body() user: { name: string; email: string; role: 'Intern' | 'Employee' },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // patch /users/:id
  update(
    @Param('id') id: string,
    @Body()
    user: {
      name?: string;
      email?: string;
      role?: 'Intern' | 'Employee';
    },
  ) {
    return this.usersService.update(+id, user);
  }

  @Delete(':id') // delete /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
