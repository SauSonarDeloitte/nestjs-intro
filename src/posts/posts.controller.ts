import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostsDto } from './dtos/patch-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService:PostsService){

    }

    @ApiResponse({
        status:201,
        description:'You get a response 201 if post is created successfully',
    })
    @Get()
    public fetchAll(){
        return this.postsService.findAll();
    }
    
    @ApiOperation({
        summary:"Creates a new blog post",
    })
    @ApiResponse({
        status: 201,
        description: 'you get 201 response if your post is created successfully',
    })
    @Post()
    public createPost(@Body() createPostDto:CreatePostDto){
        console.log(createPostDto);
    }

    @Patch()
    public updatePost(@Body() patchPostsDto:PatchPostsDto){
        console.log(patchPostsDto);
    }
}
