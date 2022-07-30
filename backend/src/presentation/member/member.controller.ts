import { Controller, Get } from '@nestjs/common';
import { MembersUsecase } from "../../usecase/member/member.usecase";

@Controller()
export class MemberController {
  constructor(private readonly MembersUsecase: MembersUsecase) {}

  @Get('api/v1/members')
  getAll() {
    return this.MembersUsecase.findAll();
  }
}
