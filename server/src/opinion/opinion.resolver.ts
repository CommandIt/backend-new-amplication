import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OpinionResolverBase } from "./base/opinion.resolver.base";
import { Opinion } from "./base/Opinion";
import { OpinionService } from "./opinion.service";
import { Query } from "@nestjs/common";
import { Args } from "@nestjs/graphql";

@graphql.Resolver(() => Opinion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class OpinionResolver extends OpinionResolverBase {
  constructor(
    protected readonly service: OpinionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @graphql.Query(() => [Opinion])
  async getOpinionsByDate(
    @Args('soliderId') soliderId: string,
    @Args('startDate') startDate: Date,
    @Args('endDate') endDate: Date
  ): Promise<Opinion[]> {
   return await this.service.getByDateRange(soliderId, startDate, endDate);
  }
}
