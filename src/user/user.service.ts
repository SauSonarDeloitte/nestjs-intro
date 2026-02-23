import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
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

    public createUsers(user:UserDto){
        console.log(user);
        console.log(typeof user);
        return this.findOne();
    }

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
    public findOne(){
        return {
                firstName:'John',
                email:'john@doe.com',
            };
        
    }
}
