import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CommanderResolverBase } from "./base/commander.resolver.base";
import { Commander } from "./base/Commander";
import { CommanderService } from "./commander.service";

@graphql.Resolver(() => Commander)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CommanderResolver extends CommanderResolverBase {
  constructor(
    protected readonly service: CommanderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
