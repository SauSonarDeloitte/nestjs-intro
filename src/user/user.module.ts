import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './providers/user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
  imports:[TypeOrmModule.forFeature([ User ])],
})
export class UserModule {}
