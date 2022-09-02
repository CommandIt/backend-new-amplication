/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSoliderArgs } from "./CreateSoliderArgs";
import { UpdateSoliderArgs } from "./UpdateSoliderArgs";
import { DeleteSoliderArgs } from "./DeleteSoliderArgs";
import { SoliderFindManyArgs } from "./SoliderFindManyArgs";
import { SoliderFindUniqueArgs } from "./SoliderFindUniqueArgs";
import { Solider } from "./Solider";
import { OpinionFindManyArgs } from "../../opinion/base/OpinionFindManyArgs";
import { Opinion } from "../../opinion/base/Opinion";
import { Team } from "../../team/base/Team";
import { SoliderService } from "../solider.service";

@graphql.Resolver(() => Solider)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SoliderResolverBase {
  constructor(
    protected readonly service: SoliderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "read",
    possession: "any",
  })
  async _solidersMeta(
    @graphql.Args() args: SoliderFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Solider])
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "read",
    possession: "any",
  })
  async soliders(
    @graphql.Args() args: SoliderFindManyArgs
  ): Promise<Solider[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Solider, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "read",
    possession: "own",
  })
  async solider(
    @graphql.Args() args: SoliderFindUniqueArgs
  ): Promise<Solider | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Solider)
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "create",
    possession: "any",
  })
  async createSolider(
    @graphql.Args() args: CreateSoliderArgs
  ): Promise<Solider> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        team: args.data.team
          ? {
              connect: args.data.team,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Solider)
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "update",
    possession: "any",
  })
  async updateSolider(
    @graphql.Args() args: UpdateSoliderArgs
  ): Promise<Solider | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          team: args.data.team
            ? {
                connect: args.data.team,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Solider)
  @nestAccessControl.UseRoles({
    resource: "Solider",
    action: "delete",
    possession: "any",
  })
  async deleteSolider(
    @graphql.Args() args: DeleteSoliderArgs
  ): Promise<Solider | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Opinion])
  @nestAccessControl.UseRoles({
    resource: "Opinion",
    action: "read",
    possession: "any",
  })
  async opinions(
    @graphql.Parent() parent: Solider,
    @graphql.Args() args: OpinionFindManyArgs
  ): Promise<Opinion[]> {
    const results = await this.service.findOpinions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Team, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Team",
    action: "read",
    possession: "any",
  })
  async team(@graphql.Parent() parent: Solider): Promise<Team | null> {
    const result = await this.service.getTeam(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
