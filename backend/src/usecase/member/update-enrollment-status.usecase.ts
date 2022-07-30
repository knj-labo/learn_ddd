import { Injectable } from '@nestjs/common';
import { MemberQueryService } from "../../infrastructure/database/member.query-service";

import { UseCase } from "./i.member.usecase";
import { Member } from "../../domain/member/member";

@Injectable()
export class UpdateEnrollmentStatusUsecase implements UseCase<any, Member> {
  constructor(private readonly memberQueryService : MemberQueryService) {}

  /**
   * 参加者のメールアドレスを更新する
   */
  private async updateEnrollmentStatus (memberId: number, id: string): Promise<any> {
    try {
      // TODO: 認証
      // TODO: 参加状態の更新
      // TODO: pair
      // TODO: team
    } catch (error) {
      throw error;
    }
  }
  public async execute(): Promise<any> {
    return await this.updateEnrollmentStatus(1, '2');
  }
}