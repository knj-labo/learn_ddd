import { Inject, Injectable } from '@nestjs/common';
import { AllMembersDTO} from './query-service-interface/all-members';
import { GetAllMembersRepository } from "../../infrastructure/database/get-all-members.repository";

@Injectable()
export class GetAllMembersUsecase {
  public constructor(
    @Inject('AllMembersQueryService')
    private readonly getAllMemberQueryService: GetAllMembersRepository,
  ) {}

  public async execute(): Promise<AllMembersDTO[]> {
    try {
      return await this.getAllMemberQueryService.getAll();
    } catch (error) {
      throw error;
    }
  }
}