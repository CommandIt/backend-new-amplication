import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CommanderService } from "./commander.service";
import { CommanderControllerBase } from "./base/commander.controller.base";

@swagger.ApiTags("commanders")
@common.Controller("commanders")
export class CommanderController extends CommanderControllerBase {
  constructor(
    protected readonly service: CommanderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
