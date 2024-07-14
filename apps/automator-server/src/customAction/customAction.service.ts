import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomActionServiceBase } from "./base/customAction.service.base";

@Injectable()
export class CustomActionService extends CustomActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
