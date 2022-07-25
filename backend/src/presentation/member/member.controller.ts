import { Controller, Get } from '@nestjs/common';
import { GetAllMembersRepository } from '../../infrastructure/database/get-all-members.repository';

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly memberService: GetAllMembersRepository) {}

  @Get()
  getAllMembers() {
    return this.memberService.getAll();
  }
}
