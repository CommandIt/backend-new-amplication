import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { OpinionServiceBase } from "./base/opinion.service.base";

@Injectable()
export class OpinionService extends OpinionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
