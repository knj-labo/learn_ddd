import { Controller, Get } from '@nestjs/common';
import { MembersUsecase } from "../../usecase/member/member.usecase";

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly MembersUsecase: MembersUsecase) {}

  @Get()
  getAll() {
    return this.MembersUsecase.getAll();
  }
}
