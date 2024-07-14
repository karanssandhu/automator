import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ActionModuleBase } from "./base/action.module.base";
import { ActionService } from "./action.service";
import { ActionController } from "./action.controller";
import { ActionResolver } from "./action.resolver";

@Module({
  imports: [ActionModuleBase, forwardRef(() => AuthModule)],
  controllers: [ActionController],
  providers: [ActionService, ActionResolver],
  exports: [ActionService],
})
export class ActionModule {}
