import { Controller, Get } from '@nestjs/common';
import { MemberService } from '../../domain/member/member-service';

@Controller('api/v1/members')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}
  @Get()
  async getAllMembers(): Promise<any[]> {
    return this.memberService.getAllMembers();
  }
}
