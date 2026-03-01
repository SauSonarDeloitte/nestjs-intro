import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserDto } from '../user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

/*
* Class to connect user table and perfom buisness perations
*/
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ){}
    public async createUser(createUserDto:CreateUserDto){
        // Check if user exists with same email
        const existingUser = await this.userRepository.findOne({
            where:{
                email: createUserDto.email
            }
        })
        // Handle exception

        // Create a new user
        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser);

        return newUser; 
    }
    public getUsers(
        id:number,
        limit:number,
        page:number,
    ){
        console.log(`id:${id}`);
        console.log(`limit:${limit}`);
        console.log(`page:${page}`)
        return this.findAll();
    }

    /*
    * Finding a single user by the id of user
    */
    public findAll(){
        return [
            {
                firstName:'John',
                email:'john@doe.com',
            },
            {
                firstName:'Alice',
                email:'alice@doe.com',
            },
        ];
        
    }
    public findOneById(id:string){
        return {
                firstName:'John',
                email:'john@doe.com',
            };
        
    }
}
