import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from '../dtos/create-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-options.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        /*
        *   Inject meta optionsRepository
        */
       @InjectRepository(MetaOption)
       private readonly metaOptionsRepository: Repository<MetaOption>,
    ){}
    public async create(createPostMetaOptionsDto:CreatePostMetaOptionDto){
        let metaOptions = this.metaOptionsRepository.create(createPostMetaOptionsDto);
        return await this.metaOptionsRepository.save(metaOptions);
    }
}
