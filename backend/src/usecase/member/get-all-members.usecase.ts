import { GetAllMembersRepository } from "../../infrastructure/database/get-all-members.repository";

import { Injectable } from '@nestjs/common';
import { Member } from '../../domain/member/member';
import { MemberDTO } from "./member.dto";

@Injectable()
export class MembersUsecase {
  constructor(private readonly getAllMemberQueryService: GetAllMembersRepository) {}
  public async execute(): Promise<any> {
    try {
      const members: Member[] = await this.getAllMemberQueryService.getAll();
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