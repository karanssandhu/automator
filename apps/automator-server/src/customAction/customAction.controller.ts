import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomActionService } from "./customAction.service";
import { CustomActionControllerBase } from "./base/customAction.controller.base";

@swagger.ApiTags("customActions")
@common.Controller("customActions")
export class CustomActionController extends CustomActionControllerBase {
  constructor(
    protected readonly service: CustomActionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
