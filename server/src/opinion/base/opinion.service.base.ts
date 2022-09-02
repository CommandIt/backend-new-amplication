/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Opinion, Solider } from "@prisma/client";

export class OpinionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OpinionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionFindManyArgs>
  ): Promise<number> {
    return this.prisma.opinion.count(args);
  }

  async findMany<T extends Prisma.OpinionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionFindManyArgs>
  ): Promise<Opinion[]> {
    return this.prisma.opinion.findMany(args);
  }
  async findOne<T extends Prisma.OpinionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionFindUniqueArgs>
  ): Promise<Opinion | null> {
    return this.prisma.opinion.findUnique(args);
  }
  async create<T extends Prisma.OpinionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionCreateArgs>
  ): Promise<Opinion> {
    return this.prisma.opinion.create<T>(args);
  }
  async update<T extends Prisma.OpinionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionUpdateArgs>
  ): Promise<Opinion> {
    return this.prisma.opinion.update<T>(args);
  }
  async delete<T extends Prisma.OpinionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OpinionDeleteArgs>
  ): Promise<Opinion> {
    return this.prisma.opinion.delete(args);
  }

  async getSolider(parentId: string): Promise<Solider | null> {
    return this.prisma.opinion
      .findUnique({
        where: { id: parentId },
      })
      .solider();
  }
}
