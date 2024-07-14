import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomationServiceBase } from "./base/automation.service.base";

@Injectable()
export class AutomationService extends AutomationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
