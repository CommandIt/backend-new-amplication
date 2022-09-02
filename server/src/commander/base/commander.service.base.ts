/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Commander, Team, User } from "@prisma/client";

export class CommanderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CommanderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderFindManyArgs>
  ): Promise<number> {
    return this.prisma.commander.count(args);
  }

  async findMany<T extends Prisma.CommanderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderFindManyArgs>
  ): Promise<Commander[]> {
    return this.prisma.commander.findMany(args);
  }
  async findOne<T extends Prisma.CommanderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderFindUniqueArgs>
  ): Promise<Commander | null> {
    return this.prisma.commander.findUnique(args);
  }
  async create<T extends Prisma.CommanderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderCreateArgs>
  ): Promise<Commander> {
    return this.prisma.commander.create<T>(args);
  }
  async update<T extends Prisma.CommanderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderUpdateArgs>
  ): Promise<Commander> {
    return this.prisma.commander.update<T>(args);
  }
  async delete<T extends Prisma.CommanderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CommanderDeleteArgs>
  ): Promise<Commander> {
    return this.prisma.commander.delete(args);
  }

  async getTeam(parentId: string): Promise<Team | null> {
    return this.prisma.commander
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.commander
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
