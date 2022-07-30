import { Controller, Get } from '@nestjs/common';

import { FindAllMembersUseCase } from '../../usecase/member/find-all.usecase';

@Controller()
export class MemberController {
  constructor(private readonly findAllMembersUseCase: FindAllMembersUseCase) {}

  @Get('api/v1/members')
  findAll() {
    return this.findAllMembersUseCase.execute();
  }
}
