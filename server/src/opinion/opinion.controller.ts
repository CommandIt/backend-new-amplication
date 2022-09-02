import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OpinionService } from "./opinion.service";
import { OpinionControllerBase } from "./base/opinion.controller.base";

@swagger.ApiTags("opinions")
@common.Controller("opinions")
export class OpinionController extends OpinionControllerBase {
  constructor(
    protected readonly service: OpinionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
