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
import { CommanderListRelationFilter } from "../../commander/base/CommanderListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SoliderListRelationFilter } from "../../solider/base/SoliderListRelationFilter";
@InputType()
class TeamWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommanderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommanderListRelationFilter)
  @IsOptional()
  @Field(() => CommanderListRelationFilter, {
    nullable: true,
  })
  commanders?: CommanderListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => SoliderListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SoliderListRelationFilter)
  @IsOptional()
  @Field(() => SoliderListRelationFilter, {
    nullable: true,
  })
  soliders?: SoliderListRelationFilter;
}
export { TeamWhereInput };