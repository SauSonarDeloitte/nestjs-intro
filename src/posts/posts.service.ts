import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    public findAll(){
        return [
            {
                title:'Test Title',
                content:'Test content',
            },
            {
                title:'Test Title',
                content:'Test content',
            },
            {
                title:'Test Title',
                content:'Test content',
            },
            {
                title:'Test Title',
                content:'Test content',
            },
        ];
    }
}