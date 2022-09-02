import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { CommanderServiceBase } from "./base/commander.service.base";

@Injectable()
export class CommanderService extends CommanderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
