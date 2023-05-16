import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TemplateService } from "./template.service";
import { TemplateControllerBase } from "./base/template.controller.base";

@swagger.ApiTags("templates")
@common.Controller("templates")
export class TemplateController extends TemplateControllerBase {
  constructor(
    protected readonly service: TemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
