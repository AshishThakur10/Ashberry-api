import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Get()
    getUser(){
        return "it user routes"
    }

    @Get('/s')
    getHello(): string {
      return this.userService.getHello();
    }

}