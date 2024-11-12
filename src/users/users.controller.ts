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

/**
 * UsersController is responsible for handling user-related HTTP requests.
 * It is mapped to the 'users' route.
 */
@Controller('users')
export class UsersController {
  /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

  @Get() // get /users
  findAll(@Query('role') role?: 'Intern' | 'Employee') {
    return [];
  }

  @Get(':id') // get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // post /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // patch /users/:id
  update(@Param('id') id: string, @Body() user: {}) {
    return { id, ...user };
  }

  @Delete(':id') // delete /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
