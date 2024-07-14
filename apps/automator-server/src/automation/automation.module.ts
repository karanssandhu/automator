import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomationModuleBase } from "./base/automation.module.base";
import { AutomationService } from "./automation.service";
import { AutomationController } from "./automation.controller";
import { AutomationResolver } from "./automation.resolver";

@Module({
  imports: [AutomationModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomationController],
  providers: [AutomationService, AutomationResolver],
  exports: [AutomationService],
})
export class AutomationModule {}
