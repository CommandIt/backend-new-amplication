import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SoldierResolverBase } from "./base/soldier.resolver.base";
import { Soldier } from "./base/Soldier";
import { SoldierService } from "./soldier.service";

@graphql.Resolver(() => Soldier)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SoldierResolver extends SoldierResolverBase {
  constructor(
    protected readonly service: SoldierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
