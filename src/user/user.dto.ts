import {
  IsString,
  MinLength,
  IsNumber,
  IsOptional,
  IsEmail,
  Matches,
  MaxLength,
} from 'class-validator';
import { User } from './user.entity';

export class UpdateRequestDTO {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly name?: string;

  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly surname?: string;

  @IsOptional()
  @IsNumber()
  readonly age?: number;
}

export class UpdateResponseDTO extends User {}

export class SignUpRequestDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly name: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  readonly surname: string;

  @IsOptional()
  @IsNumber()
  readonly age?: number;

  @IsEmail()
  @MinLength(5)
  @MaxLength(30)
  readonly email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(30)
  @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).*$/, {
    message: 'The password is too week, please set up a more complex password.',
  })
  readonly password: string;
}

export class SignUpResponseDTO extends User {}

export class FindByEmailResponseDTO extends User {}

export class FindByIdResponseDTO extends User {}
