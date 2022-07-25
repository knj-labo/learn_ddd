import { MembersRepository } from "../../infrastructure/database/members.repository";

import { Injectable } from '@nestjs/common';
import { Member } from '../../domain/member/member';
import { MemberDTO } from "./member.dto";

@Injectable()
export class MembersUsecase {
  constructor(private readonly MemberRepository: MembersRepository) {}
  public async execute(): Promise<any> {
    try {
      const members: Member[] = await this.MemberRepository.getAll();
      return members.map(member => {
        return new MemberDTO({
          name: member.name,
          email: member.email,
          enrollmentStatus: member.enrollmentStatus,
          }
        )
      })
    } catch (error) {
      throw error;
    }
  }
}