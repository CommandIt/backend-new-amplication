import { Module } from "@nestjs/common";
import { OpinionModuleBase } from "./base/opinion.module.base";
import { OpinionService } from "./opinion.service";
import { OpinionController } from "./opinion.controller";
import { OpinionResolver } from "./opinion.resolver";

@Module({
  imports: [OpinionModuleBase],
  controllers: [OpinionController],
  providers: [OpinionService, OpinionResolver],
  exports: [OpinionService],
})
export class OpinionModule {}
