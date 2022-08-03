import { Controller, Post, Get } from '@nestjs/common';

import { FindAllMembersUseCase } from '../../usecase/member/find-all.usecase';
import { UpdateEmailUseCase } from '../../usecase/member/update-email.usecase'

/**
 * @see https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/
 */
@Controller()
export class MemberController {
  constructor(
    private readonly findAllMembersUseCase: FindAllMembersUseCase,
    private readonly updateEmailUseCase: UpdateEmailUseCase,
    ) {}

  @Get('api/v1/members')
  findAll() {
    return this.findAllMembersUseCase.execute();
  }

  @Post()
  updateMember() {
    return this.updateEmailUseCase.execute();
  }
}
