import { Controller, Get } from '@nestjs/common';
import { AllMembersQueryService } from '../../infrastructure/database/all-members-repository';

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly memberService: AllMembersQueryService) {}

  @Get()
  getAllMembers() {
    return this.memberService.getAllMembers();
  }
}
