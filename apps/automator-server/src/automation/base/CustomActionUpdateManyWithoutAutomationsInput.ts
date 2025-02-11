/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CustomActionWhereUniqueInput } from "../../customAction/base/CustomActionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CustomActionUpdateManyWithoutAutomationsInput {
  @Field(() => [CustomActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomActionWhereUniqueInput],
  })
  connect?: Array<CustomActionWhereUniqueInput>;

  @Field(() => [CustomActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomActionWhereUniqueInput],
  })
  disconnect?: Array<CustomActionWhereUniqueInput>;

  @Field(() => [CustomActionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CustomActionWhereUniqueInput],
  })
  set?: Array<CustomActionWhereUniqueInput>;
}

export { CustomActionUpdateManyWithoutAutomationsInput as CustomActionUpdateManyWithoutAutomationsInput };
