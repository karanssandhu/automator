import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomActionModuleBase } from "./base/customAction.module.base";
import { CustomActionService } from "./customAction.service";
import { CustomActionController } from "./customAction.controller";
import { CustomActionResolver } from "./customAction.resolver";

@Module({
  imports: [CustomActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomActionController],
  providers: [CustomActionService, CustomActionResolver],
  exports: [CustomActionService],
})
export class CustomActionModule {}
