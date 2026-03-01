import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/create-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(        /**
         * Inject MetOptionsService 
         */
        private readonly metaOptionsService:MetaOptionsService,
    ){}
    @Post()
    public create(@Body() createPostMetaOptionDto:CreatePostMetaOptionDto){
        return this.metaOptionsService.create(createPostMetaOptionDto);
    }
}
