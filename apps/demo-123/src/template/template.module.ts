import { Module } from "@nestjs/common";
import { TemplateModuleBase } from "./base/template.module.base";
import { TemplateService } from "./template.service";
import { TemplateController } from "./template.controller";
import { TemplateResolver } from "./template.resolver";

@Module({
  imports: [TemplateModuleBase],
  controllers: [TemplateController],
  providers: [TemplateService, TemplateResolver],
  exports: [TemplateService],
})
export class TemplateModule {}
