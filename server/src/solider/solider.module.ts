import { Module } from "@nestjs/common";
import { SoliderModuleBase } from "./base/solider.module.base";
import { SoliderService } from "./solider.service";
import { SoliderController } from "./solider.controller";
import { SoliderResolver } from "./solider.resolver";

@Module({
  imports: [SoliderModuleBase],
  controllers: [SoliderController],
  providers: [SoliderService, SoliderResolver],
  exports: [SoliderService],
})
export class SoliderModule {}
