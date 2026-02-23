import { Body, Controller, Get, Post, Param, Query ,ValidationPipe, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    userService:UserService;
    constructor(userService:UserService){
        this.userService = userService
    }
    @Get('/:id')
    public getUsers(
        @Param('id', ParseIntPipe) id:number,
        @Query('limit',new DefaultValuePipe(10),ParseIntPipe) limit:number,
        @Query('page',new DefaultValuePipe(1),ParseIntPipe) page:number,
    ){
        return this.userService.getUsers(id,limit,page);
    }

    @Post()
    public createUsers(@Body(new ValidationPipe()) user:UserDto){
        return this.userService.createUsers(user);
    }

}
