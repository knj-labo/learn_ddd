import { Injectable } from '@nestjs/common';
import { MemberId } from "../../domain/member/member-id";
import { MemberQueryService } from "../../infrastructure/database/member.query-service";
import { BadRequestError } from "../../utils/bad-request-error";
import { ForbiddenError } from "../../utils/forbidden-error";
import { InternalServerError } from "../../utils/internal-server-error";

import { UseCase } from "./i.member.usecase";

@Injectable()
export class FindAllMembersUseCase implements UseCase<any, any> {
  constructor(private readonly memberQueryService : MemberQueryService) {}

  /**
   * 参加者一覧を取得する
   */
  public async findList (): Promise<MemberDTO[]> {
    try {
      return await this.memberQueryService.findList();
    } catch (error) {
      if (error instanceof BadRequestError) {
        console.error(error.message);
        console.error(error.stack);
        return;
      }
      if (error instanceof ForbiddenError) {
        console.error(error.message);
        console.error(error.stack);
        return;
      }
      if (error instanceof InternalServerError) {
        console.error(error.message);
        console.error(error.stack);
        return;
      }
      if (error instanceof Error) {
        console.error(error.message);
        console.error(error.stack);
        return;
      }
      throw error;
    }
  }

  /**
   * 参加者のメールアドレスを変更
   */
  public async changeEmail(memberId: MemberId, email: string): Promise<any> {
    try {
      // TODO: メールアドレスの一意検証
      // TODO: メールアドレスの保存
    } catch (error) {
      throw error;
    }
  }
}