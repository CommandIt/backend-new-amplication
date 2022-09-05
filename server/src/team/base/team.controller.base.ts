/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TeamService } from "../team.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TeamCreateInput } from "./TeamCreateInput";
import { TeamWhereInput } from "./TeamWhereInput";
import { TeamWhereUniqueInput } from "./TeamWhereUniqueInput";
import { TeamFindManyArgs } from "./TeamFindManyArgs";
import { TeamUpdateInput } from "./TeamUpdateInput";
import { Team } from "./Team";
import { CommanderFindManyArgs } from "../../commander/base/CommanderFindManyArgs";
import { Commander } from "../../commander/base/Commander";
import { CommanderWhereUniqueInput } from "../../commander/base/CommanderWhereUniqueInput";
import { SoldierFindManyArgs } from "../../soldier/base/SoldierFindManyArgs";
import { Soldier } from "../../soldier/base/Soldier";
import { SoldierWhereUniqueInput } from "../../soldier/base/SoldierWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TeamControllerBase {
  constructor(
    protected readonly service: TeamService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Team })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: TeamCreateInput): Promise<Team> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Team] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TeamFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Team[]> {
    const args = plainToClass(TeamFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
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
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() data: TeamUpdateInput
  ): Promise<Team | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
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

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Team })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Team | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
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
  @nestAccessControl.UseRoles({
    resource: "Commander",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/commanders")
  @ApiNestedQuery(CommanderFindManyArgs)
  async findManyCommanders(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Commander[]> {
    const query = plainToClass(CommanderFindManyArgs, request.query);
    const results = await this.service.findCommanders(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
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

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/commanders")
  async connectCommanders(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CommanderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commanders: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/commanders")
  async updateCommanders(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CommanderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commanders: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/commanders")
  async disconnectCommanders(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: CommanderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      commanders: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Soldier",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/soldier")
  @ApiNestedQuery(SoldierFindManyArgs)
  async findManySoldier(
    @common.Req() request: Request,
    @common.Param() params: TeamWhereUniqueInput
  ): Promise<Soldier[]> {
    const query = plainToClass(SoldierFindManyArgs, request.query);
    const results = await this.service.findSoldier(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,

        team: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/soldier")
  async connectSoldier(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SoldierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soldier: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/soldier")
  async updateSoldier(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SoldierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soldier: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/soldier")
  async disconnectSoldier(
    @common.Param() params: TeamWhereUniqueInput,
    @common.Body() body: SoldierWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      soldier: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
