import { Controller, Get } from '@nestjs/common';
// import { GetAllMembersRepository } from '../../infrastructure/database/get-all-members.repository';
import { GetAllMembersUsecase } from "../../usecase/member/get-all-members.usecase";

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly memberService: GetAllMembersUsecase) {}

  @Get()
  getAll() {
    return this.memberService.execute();
  }
}
