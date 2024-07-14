import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ActionService } from "./action.service";
import { ActionControllerBase } from "./base/action.controller.base";

@swagger.ApiTags("actions")
@common.Controller("actions")
export class ActionController extends ActionControllerBase {
  constructor(
    protected readonly service: ActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
