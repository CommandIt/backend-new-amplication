import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SoldierServiceBase } from "./base/soldier.service.base";

@Injectable()
export class SoldierService extends SoldierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
