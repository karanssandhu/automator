/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AutomationService } from "../automation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AutomationCreateInput } from "./AutomationCreateInput";
import { Automation } from "./Automation";
import { AutomationFindManyArgs } from "./AutomationFindManyArgs";
import { AutomationWhereUniqueInput } from "./AutomationWhereUniqueInput";
import { AutomationUpdateInput } from "./AutomationUpdateInput";
import { CustomActionFindManyArgs } from "../../customAction/base/CustomActionFindManyArgs";
import { CustomAction } from "../../customAction/base/CustomAction";
import { CustomActionWhereUniqueInput } from "../../customAction/base/CustomActionWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AutomationControllerBase {
  constructor(
    protected readonly service: AutomationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Automation })
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AutomationCreateInput,
  })
  async createAutomation(
    @common.Body() data: AutomationCreateInput
  ): Promise<Automation> {
    return await this.service.createAutomation({
      data: {
        ...data,

        action: data.action
          ? {
              connect: data.action,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        action: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Automation] })
  @ApiNestedQuery(AutomationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automations(@common.Req() request: Request): Promise<Automation[]> {
    const args = plainToClass(AutomationFindManyArgs, request.query);
    return this.service.automations({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        action: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Automation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automation(
    @common.Param() params: AutomationWhereUniqueInput
  ): Promise<Automation | null> {
    const result = await this.service.automation({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,

        action: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Automation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AutomationUpdateInput,
  })
  async updateAutomation(
    @common.Param() params: AutomationWhereUniqueInput,
    @common.Body() data: AutomationUpdateInput
  ): Promise<Automation | null> {
    try {
      return await this.service.updateAutomation({
        where: params,
        data: {
          ...data,

          action: data.action
            ? {
                connect: data.action,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,

          action: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Automation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAutomation(
    @common.Param() params: AutomationWhereUniqueInput
  ): Promise<Automation | null> {
    try {
      return await this.service.deleteAutomation({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          description: true,

          action: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/customActions")
  @ApiNestedQuery(CustomActionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CustomAction",
    action: "read",
    possession: "any",
  })
  async findCustomActions(
    @common.Req() request: Request,
    @common.Param() params: AutomationWhereUniqueInput
  ): Promise<CustomAction[]> {
    const query = plainToClass(CustomActionFindManyArgs, request.query);
    const results = await this.service.findCustomActions(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,

        user: {
          select: {
            id: true,
          },
        },

        automation: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/customActions")
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "update",
    possession: "any",
  })
  async connectCustomActions(
    @common.Param() params: AutomationWhereUniqueInput,
    @common.Body() body: CustomActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customActions: {
        connect: body,
      },
    };
    await this.service.updateAutomation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/customActions")
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "update",
    possession: "any",
  })
  async updateCustomActions(
    @common.Param() params: AutomationWhereUniqueInput,
    @common.Body() body: CustomActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customActions: {
        set: body,
      },
    };
    await this.service.updateAutomation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/customActions")
  @nestAccessControl.UseRoles({
    resource: "Automation",
    action: "update",
    possession: "any",
  })
  async disconnectCustomActions(
    @common.Param() params: AutomationWhereUniqueInput,
    @common.Body() body: CustomActionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      customActions: {
        disconnect: body,
      },
    };
    await this.service.updateAutomation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
