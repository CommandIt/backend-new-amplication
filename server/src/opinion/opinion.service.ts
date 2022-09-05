import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Opinion } from "./base/Opinion";
import { OpinionServiceBase } from "./base/opinion.service.base";

@Injectable()
export class OpinionService extends OpinionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  async getByDateRange(soldierId: string, startDate: Date, endDate: Date): Promise<Opinion[]> {
    return this.findMany({
      where: {soldierId: soldierId, date: {gte: startDate, lte: endDate}}
    });
  }
}
