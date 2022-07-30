import { Injectable } from '@nestjs/common';
import { MemberId } from '../../domain/member/member-id';
import { MemberQueryService } from '../../infrastructure/database/member.query-service';
import { BadRequestError } from '../../utils/bad-request-error';
import { ForbiddenError } from '../../utils/forbidden-error';
import { InternalServerError } from '../../utils/internal-server-error';

import { UseCase } from './i.member.usecase';
import { Member } from '../../domain/member/member';
import { MemberDTO } from './member.dto';

interface FindAllMembersUseCaseRequestDTO {
  name: string;
  email: string;
  enrollmentStatus: string;
}

@Injectable()
export class FindAllMembersUseCase implements UseCase<any, Member> {
  constructor(private readonly memberQueryService: MemberQueryService) {}
  /**
   * 参加者一覧を取得する
   */
  private async findList(): Promise<MemberDTO[]> {
    return await this.memberQueryService.findList();
  }
  public async execute(): Promise<any> {
    return await this.findList();
  }
}
