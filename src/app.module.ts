import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsController } from './meta-options/meta-options.controller';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [
    UserModule, 
    PostsModule, 
    AuthModule, 
    TypeOrmModule.forRootAsync({
      useFactory:()=>({
        imports:[],
        inject:[],
        type:'postgres',
        // entities:[ User ],
        autoLoadEntities:true,
        synchronize:true,
        port:5432,
        username:'postgres',
        password:'Test@123',
        host:'localhost',
        database:'nestjs-blog'
      }),
    }), TagsModule, MetaOptionsModule,
  ],
  controllers: [AppController, TagsController],
  providers: [AppService],
})
export class AppModule {}
