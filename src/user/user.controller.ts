import { Body, Controller, Get, Post, Param, Query ,ValidationPipe } from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('user')
export class UserController {
    @Get()
    public getUsers(){
        return 'You got an request to the users endpoint';
    }

    @Post()
    public createUsers(@Body(new ValidationPipe()) user:UserDto){
        console.log(user);
        console.log(typeof user);
        return 'You got an request to the users endpoint';
    }

}
