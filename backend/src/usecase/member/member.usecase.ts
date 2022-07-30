import { Injectable } from '@nestjs/common';
import { MemberDTO } from "./member.dto";
import { MemberId } from "../../domain/member/member-id";
import { MemberQueryService } from "../../infrastructure/database/member.query-service";
import { BadRequestError } from "../../utils/bad-request-error";
import { ForbiddenError } from "../../utils/forbidden-error";
import { InternalServerError } from "../../utils/internal-server-error";

@Injectable()
export class MembersUsecase {
  constructor(private readonly memberQueryService : MemberQueryService) {}

  /**
   * 参加者一覧を取得する
   */
  public async findAll(): Promise<MemberDTO[]> {
    try {
      return await this.memberQueryService.fetchMemberList();
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