/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Action as PrismaAction,
  Automation as PrismaAutomation,
  User as PrismaUser,
} from "@prisma/client";

export class ActionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ActionCountArgs, "select">): Promise<number> {
    return this.prisma.action.count(args);
  }

  async actions(args: Prisma.ActionFindManyArgs): Promise<PrismaAction[]> {
    return this.prisma.action.findMany(args);
  }
  async action(
    args: Prisma.ActionFindUniqueArgs
  ): Promise<PrismaAction | null> {
    return this.prisma.action.findUnique(args);
  }
  async createAction(args: Prisma.ActionCreateArgs): Promise<PrismaAction> {
    return this.prisma.action.create(args);
  }
  async updateAction(args: Prisma.ActionUpdateArgs): Promise<PrismaAction> {
    return this.prisma.action.update(args);
  }
  async deleteAction(args: Prisma.ActionDeleteArgs): Promise<PrismaAction> {
    return this.prisma.action.delete(args);
  }

  async findAutomations(
    parentId: string,
    args: Prisma.AutomationFindManyArgs
  ): Promise<PrismaAutomation[]> {
    return this.prisma.action
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .automations(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.action
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
