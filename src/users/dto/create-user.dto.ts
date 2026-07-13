import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'email must be a valid email address' })
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @IsString({ message: 'password must be a string' })
  @IsNotEmpty({ message: 'password is required' })
  @MinLength(8, { message: 'password must be at least 8 characters long' })
  password: string;

  @IsString({ message: 'fullName must be a string' })
  @IsNotEmpty({ message: 'fullName is required' })
  fullName: string;

  @IsString({ message: 'avatar must be a string' })
  @IsOptional()
  avatar?: string;
}
