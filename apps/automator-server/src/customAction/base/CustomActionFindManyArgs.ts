/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomActionWhereInput } from "./CustomActionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CustomActionOrderByInput } from "./CustomActionOrderByInput";

@ArgsType()
class CustomActionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CustomActionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CustomActionWhereInput, { nullable: true })
  @Type(() => CustomActionWhereInput)
  where?: CustomActionWhereInput;

  @ApiProperty({
    required: false,
    type: [CustomActionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CustomActionOrderByInput], { nullable: true })
  @Type(() => CustomActionOrderByInput)
  orderBy?: Array<CustomActionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CustomActionFindManyArgs as CustomActionFindManyArgs };
