import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength, ValidateNested,} from "class-validator";
import { postStatus } from "../enums/postStatus.enums";
import { postTypes } from "../enums/postType.enums";
import { CreatePostMetaOptionsDto } from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreatePostDto{
    @ApiProperty({
        example:'This is a title',
        description: 'This is the title for the blog posts',
    })
    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    title:string;

    @ApiProperty({
        enum:postTypes,
        description:"'Possinle values , 'post', 'page', 'story', 'series'",
    })
    @IsEnum(postTypes)
    @IsNotEmpty()
    postType:postTypes;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'A slug should be all small letters and only use only"-" and without spaces. For example "my-url"',
    })
    @MaxLength(256)
    slug:string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status:postStatus;

    @ApiPropertyOptional({
        description:'This is the content of post',
        example:'The pos'
    })
    @IsString()
    @IsOptional()
    content? :string;

    @ApiPropertyOptional({
        description:'Serialize your JSON object else a validation error will be thrown',
        example:'{ \"@context\": \"https://schema.org\", \"@type\": \"Person\" }'
    })
    @IsOptional()
    @IsJSON()
    schema? :string;

    @ApiPropertyOptional({
        description:'Featured image for your blog post',
        example:'http://localhost.com/images/image1.jpg',   
    })
    @IsOptional()
    @IsUrl()
    featuredImageUriString?: string;

    @ApiPropertyOptional({
        description:'The date on which blog post is published',
        example:'2013-07-01T17:55:13-07:00'
    })
    @IsISO8601()
    @IsOptional()
    publishedOn?: string;

    @ApiPropertyOptional({
        description:'Array of tags passed as string values',
        example:'["nestjs", "typescript"]'
    })
    @IsOptional()
    @IsArray()
    @IsString({each:true})
    @MinLength(3,{each:true})
    tags?: string[];

    @ApiPropertyOptional({
        type:'array',
        required:false,
        items:{
            type:'object',
            properties:{
                key:{
                    type:'stringe',
                    description:'The key can be any string identifier for your meta option',
                    example:'sidebarEnabled'
                },
                value:{
                    type:'any',
                    description:'Any value that you want to save to the key',
                    example: true,
                },
            }
        },
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto;

}
