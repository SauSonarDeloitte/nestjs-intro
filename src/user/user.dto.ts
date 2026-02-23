import  { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';
export class UserDto{

    @IsString()
    @IsNotEmpty()
    firstName:string;
    
    @IsString()
    @IsNotEmpty()
    lastName:string;
    
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsStrongPassword()
    password:string;
    
}