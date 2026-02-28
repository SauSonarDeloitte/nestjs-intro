import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { AuthService } from 'src/auth/auth.service';

/*
* Class to connect user table and perfom buisness perations
*/
@Injectable()
export class UserService {
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService:AuthService,
    ){}
    public getUsers(
        id:number,
        limit:number,
        page:number,
    ){
        this.authService.isAuth();
        console.log(`id:${id}`);
        console.log(`limit:${limit}`);
        console.log(`page:${page}`)
        return this.findAll();
    }

    /*
    * Method to get all users from database
    */
    public createUsers(user:UserDto){
        console.log(user);
        console.log(typeof user);
        return this.findOneById('1234');
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
