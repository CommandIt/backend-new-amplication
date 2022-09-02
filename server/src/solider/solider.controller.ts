import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SoliderService } from "./solider.service";
import { SoliderControllerBase } from "./base/solider.controller.base";

@swagger.ApiTags("soliders")
@common.Controller("soliders")
export class SoliderController extends SoliderControllerBase {
  constructor(
    protected readonly service: SoliderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
