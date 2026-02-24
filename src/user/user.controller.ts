import { Body, Controller, Get, Post, Param, Query ,ValidationPipe, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { ApiParam, ApiTags } from '@nestjs/swagger';
@Controller('user')
@ApiTags('User tag')
export class UserController {
    userService:UserService;
    constructor(userService:UserService){
        this.userService = userService
    }
    @Get('/:id')
    @ApiParam({
        name:'id',
        type:'number',
        required:false,
        description:'User id',
        example:'1234'
    })
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
