import { Module } from "@nestjs/common";
import { CommanderModuleBase } from "./base/commander.module.base";
import { CommanderService } from "./commander.service";
import { CommanderController } from "./commander.controller";
import { CommanderResolver } from "./commander.resolver";

@Module({
  imports: [CommanderModuleBase],
  controllers: [CommanderController],
  providers: [CommanderService, CommanderResolver],
  exports: [CommanderService],
})
export class CommanderModule {}
