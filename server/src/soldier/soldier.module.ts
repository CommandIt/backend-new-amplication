import { Module } from "@nestjs/common";
import { SoldierModuleBase } from "./base/soldier.module.base";
import { SoldierService } from "./soldier.service";
import { SoldierController } from "./soldier.controller";
import { SoldierResolver } from "./soldier.resolver";

@Module({
  imports: [SoldierModuleBase],
  controllers: [SoldierController],
  providers: [SoldierService, SoldierResolver],
  exports: [SoldierService],
})
export class SoldierModule {}
