import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SoliderServiceBase } from "./base/solider.service.base";

@Injectable()
export class SoliderService extends SoliderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
