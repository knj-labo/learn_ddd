import { GetAllMembersRepository } from "../../infrastructure/database/get-all-members.repository";
import { Injectable } from '@nestjs/common';
import { Member } from '../../domain/member/member';

@Injectable()
export class GetAllMembersUsecase {
  constructor(private readonly getAllMemberQueryService: GetAllMembersRepository) {}
  public async execute(): Promise<any> {
    try {
      const members = await this.getAllMemberQueryService.getAll();
      members.map(member => {
        member.enrollmentStatus = member.enrollmentStatus.name;
      })
      return members;
    } catch (error) {
      throw error;
    }
  }
}