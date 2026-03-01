import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/providers/user.service';

@Injectable()
export class AuthService {
    constructor(
        // Injecting users service
        @Inject(forwardRef(()=>UserService))
        private readonly userService:UserService,
    ){

    }
    public login(email,password){
        const user = this.userService.findOneById('1234');
        return 'SAMPLE TOKEN';
        // Check user exists in db
        // login
        // token
    }
    public isAuth(){
        return true;
    }
}
