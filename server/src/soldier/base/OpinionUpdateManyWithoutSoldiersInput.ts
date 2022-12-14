/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OpinionWhereUniqueInput } from "../../opinion/base/OpinionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class OpinionUpdateManyWithoutSoldiersInput {
  @Field(() => [OpinionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpinionWhereUniqueInput],
  })
  connect?: Array<OpinionWhereUniqueInput>;

  @Field(() => [OpinionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpinionWhereUniqueInput],
  })
  disconnect?: Array<OpinionWhereUniqueInput>;

  @Field(() => [OpinionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OpinionWhereUniqueInput],
  })
  set?: Array<OpinionWhereUniqueInput>;
}
export { OpinionUpdateManyWithoutSoldiersInput };
