/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { OpinionWhereUniqueInput } from "./OpinionWhereUniqueInput";
import { OpinionUpdateInput } from "./OpinionUpdateInput";

@ArgsType()
class UpdateOpinionArgs {
  @Field(() => OpinionWhereUniqueInput, { nullable: false })
  where!: OpinionWhereUniqueInput;
  @Field(() => OpinionUpdateInput, { nullable: false })
  data!: OpinionUpdateInput;
}

export { UpdateOpinionArgs };
