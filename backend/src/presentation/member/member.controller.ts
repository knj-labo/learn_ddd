import { Controller, Get } from '@nestjs/common';
import { MembersUsecase } from "../../usecase/member/get-all-members.usecase";

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly memberService: MembersUsecase) {}

  @Get()
  getAll() {
    return this.memberService.execute();
  }
}
