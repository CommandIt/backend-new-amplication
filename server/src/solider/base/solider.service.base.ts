/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Solider, Opinion, Team } from "@prisma/client";

export class SoliderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SoliderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderFindManyArgs>
  ): Promise<number> {
    return this.prisma.solider.count(args);
  }

  async findMany<T extends Prisma.SoliderFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderFindManyArgs>
  ): Promise<Solider[]> {
    return this.prisma.solider.findMany(args);
  }
  async findOne<T extends Prisma.SoliderFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderFindUniqueArgs>
  ): Promise<Solider | null> {
    return this.prisma.solider.findUnique(args);
  }
  async create<T extends Prisma.SoliderCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderCreateArgs>
  ): Promise<Solider> {
    return this.prisma.solider.create<T>(args);
  }
  async update<T extends Prisma.SoliderUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderUpdateArgs>
  ): Promise<Solider> {
    return this.prisma.solider.update<T>(args);
  }
  async delete<T extends Prisma.SoliderDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SoliderDeleteArgs>
  ): Promise<Solider> {
    return this.prisma.solider.delete(args);
  }

  async findOpinions(
    parentId: string,
    args: Prisma.OpinionFindManyArgs
  ): Promise<Opinion[]> {
    return this.prisma.solider
      .findUnique({
        where: { id: parentId },
      })
      .opinions(args);
  }

  async getTeam(parentId: string): Promise<Team | null> {
    return this.prisma.solider
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }
}