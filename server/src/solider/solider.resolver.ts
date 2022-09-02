import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SoliderResolverBase } from "./base/solider.resolver.base";
import { Solider } from "./base/Solider";
import { SoliderService } from "./solider.service";

@graphql.Resolver(() => Solider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SoliderResolver extends SoliderResolverBase {
  constructor(
    protected readonly service: SoliderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
