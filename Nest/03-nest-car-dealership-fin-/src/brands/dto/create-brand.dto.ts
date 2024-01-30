import { IsString, MinLength } from 'class-validator';

export class CreateBrandDto {
  //   !Cuando se hace un post solamente recibiremos un string y un minLeng
  @IsString()
  @MinLength(1) //Minimo 1 letra para que no esté vacio
  name: string;
}
