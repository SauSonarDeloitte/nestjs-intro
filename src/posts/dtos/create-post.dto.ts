import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested,} from "class-validator";
import { postStatus } from "../enums/postStatus.enums";
import { postTypes } from "../enums/postType.enums";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";

export class CreatePostDto{

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title:string;

    @IsEnum(postTypes)
    @IsNotEmpty()
    postType:postTypes;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'A slug should be all small letters and only use only"-" and without spaces. For example "my-url"',
    })
    slug:string;
    
    @IsEnum(postStatus)
    @IsNotEmpty()
    status:postStatus;

    @IsString()
    @IsOptional()
    content? :string;

    @IsOptional()
    @IsJSON()
    schema? :string;

    @IsOptional()
    @IsUrl()
    featuredImageUriString?: string;

    @IsISO8601()
    @IsOptional()
    publishedOn?: string;

    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    tags?: string[];

    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>CreatePostMetaOptionsDto)
    metaOptions: CreatePostMetaOptionsDto;

}
