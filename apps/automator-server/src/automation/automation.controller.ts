import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomationService } from "./automation.service";
import { AutomationControllerBase } from "./base/automation.controller.base";

@swagger.ApiTags("automations")
@common.Controller("automations")
export class AutomationController extends AutomationControllerBase {
  constructor(
    protected readonly service: AutomationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
