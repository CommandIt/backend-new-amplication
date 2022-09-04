/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommanderUpdateManyWithoutTeamsInput } from "./CommanderUpdateManyWithoutTeamsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { SoliderUpdateManyWithoutTeamsInput } from "./SoliderUpdateManyWithoutTeamsInput";
@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommanderUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => CommanderUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => CommanderUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  commanders?: CommanderUpdateManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => SoliderUpdateManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => SoliderUpdateManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => SoliderUpdateManyWithoutTeamsInput, {
    nullable: true,
  })
  soldier?: SoliderUpdateManyWithoutTeamsInput;
}
export { TeamUpdateInput };
