// import { PartialType } from '@nestjs/mapped-types'; //! mapped-types nos permite hacer un extends a  nuestro Dto y hacerlo opcional (?)
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {

// }

export class UpdateBrandDto {
  @IsString()
  @MinLength(1)
  name: string;
}
