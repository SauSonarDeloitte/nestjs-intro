import { Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CreatePostMetaOptionsDto } from "./dtos/create-post-meta-options.dto";
import { postStatus } from "./enums/postStatus.enums";
import { postTypes } from "./enums/postType.enums";
import { MetaOption } from "src/meta-options/meta-options.entity";

export class Post{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false
    })
    title:string;

    @Column({
        type: 'enum',
        enum: postTypes,
        nullable: false,
        default: postTypes.POST
    })
    postType:postTypes;

    @Column({
        type: 'varchar',
        length: 256,
        nullable: false,
        unique: true
    })
    slug:string;

    @Column({
        type: 'enum',
        enum: postStatus,
        nullable: false,
        default: postStatus.DRAFT
    })
    status:postStatus;

    @Column({
        type: 'text',
        nullable: true
    })
    content? :string;

    @Column({
        type: 'text',
        nullable: true
   })
    schema? :string;

    @Column({
        type: 'varchar',
        length: 1024,
        nullable: false
    })
    featuredImageUriString?: string;

    @Column({
        type: 'timestamp',// 'datetime' in mysql
        nullable: true
    })
    publishedOn?: string;

    @Column({
        type: 'varchar',
        length: 512,
        nullable: false
    })

    @OneToOne(()=>MetaOption)
    @JoinColumn()
    metaOptions?: CreatePostMetaOptionsDto;

    // Work on these lectures on relationships
    tags?: string[];
}
