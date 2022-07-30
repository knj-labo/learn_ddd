import { Injectable } from '@nestjs/common';

import type { Member } from '../../domain/member/member';
import type { MemberQueryService } from '../../infrastructure/database/member.query-service';
import type { UseCase } from './i.member.usecase';

@Injectable()
export class UpdateEmail implements UseCase<any, Member> {
  constructor(private readonly memberQueryService: MemberQueryService) {}

  /**
   * 参加者のメールアドレスを更新する
   */
  private async updateEmail(memberId: number, email: string): Promise<any> {
    try {
      // TODO: メールアドレスの一意検証
      // TODO: メールアドレスの保存
    } catch (error) {
      throw error;
    }
  }

  public async execute(): Promise<any> {
    return await this.updateEmail(1, 'sample@example.com');
  }
}
