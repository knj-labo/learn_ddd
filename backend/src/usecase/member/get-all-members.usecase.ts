import { GetAllMembersRepository } from "../../infrastructure/database/get-all-members.repository";
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllMembersUsecase {
  constructor(private readonly getAllMemberQueryService: GetAllMembersRepository) {}
  public async execute(): Promise<any> {
    try {
      return await this.getAllMemberQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}