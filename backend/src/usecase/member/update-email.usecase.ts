import { Injectable } from '@nestjs/common';

import type { MemberAggregate } from '../../domain/member/member.aggregate';
import type { MemberQueryService } from '../../infrastructure/database/member.query-service';
import type { UseCase } from './i.member.usecase';

@Injectable()
export class UpdateEmailUseCase implements UseCase<any, MemberAggregate> {
  constructor(private readonly memberQueryService: MemberQueryService) {}

  /**
   * 参加者のメールアドレスを更新する
   */
  private async updateEmail(request): Promise<any> {
    try {
      await this.memberQueryService.findMemberById(request.memberId)
    } catch (error) {
      throw error;
    }

    // Update logic
  }

  public async execute(): Promise<any> {
    return await this.updateEmail(1);
  }
}
