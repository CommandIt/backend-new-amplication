import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoldierService } from "./soldier.service";
import { SoldierControllerBase } from "./base/soldier.controller.base";

@swagger.ApiTags("soldiers")
@common.Controller("soldiers")
export class SoldierController extends SoldierControllerBase {
  constructor(
    protected readonly service: SoldierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
