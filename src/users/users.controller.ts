import {Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import {User} from "@prisma/client";
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    createUser(@Body() data: CreateUserDto): Promise<User> {
        return this.userService.createUser(data.firstName, data.lastName, data.email, data.password);
    }
}
