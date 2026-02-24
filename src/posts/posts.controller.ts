import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService:PostsService){

    }

    @Get()
    public fetchAll(){
        return this.postsService.findAll();
    }
    
    @Post()
    public createPost(@Body() createPostDto:CreatePostDto){
        console.log(createPostDto);
    }
}
