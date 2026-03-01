import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength, Matches, IsOptional, IsJSON, IsUrl } from "class-validator";
import { Column } from "typeorm";

export class CreateTagDto {

    @ApiProperty()
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @MaxLength(256)
    name: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/,{
        message:'A slug should be all small letters and only use only"-" and without spaces. For example "my-url"',
    })
    @MaxLength(256)
    slug:string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsJSON()
    schema?:string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?:string;

}