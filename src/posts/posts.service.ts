import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostsService {
    constructor(private readonly userService:UserService){

    }
    public findAll(){
        var user = this.userService.findOne();
        return [
            {
                user:user,
                title:'Test Title',
                content:'Test content',
            },
            {
                user:user,
                title:'Test Title',
                content:'Test content',
            },
            {
                user:user,
                title:'Test Title',
                content:'Test content',
            },
            {
                user:user,
                title:'Test Title',
                content:'Test content',
            },
        ];
    }
}