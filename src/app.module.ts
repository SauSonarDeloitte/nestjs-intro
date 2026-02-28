import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule, 
    PostsModule, 
    AuthModule, 
    TypeOrmModule.forRoot({
      type:'postgres',
      entities:[],
      synchronize:true,
      port:5432,
      username:'postgres',
      password:'Test@123',
      host:'localhost',
      database:'nestjs-blog'
    }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
