import { Injectable } from '@nestjs/common';
import { MembersRepository} from "../../infrastructure/database/members.repository";
import { Member } from '../../domain/member/member';
import { MemberDTO } from "./member.dto";
import { MemberId } from "../../domain/member/member-id";
import { MemberEmail } from "../../domain/member/member-email";

@Injectable()
export class MembersUsecase {
  constructor(private readonly memberRepository: MembersRepository) {}

  /**
   * 参加者一覧を取得する
   */
  public async getAll(): Promise<MemberDTO[]> {
    try {
      const members: Member[] = await this.memberRepository.getAll();
      return members.map(member => {
        return new MemberDTO({
          name: member.name,
          email: member.email,
          enrollmentStatus: member.enrollmentStatus.name,
          }
        )
      })
    } catch (error) {
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