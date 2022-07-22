import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma-service';

@Injectable()
export class AllMembersQueryService {
  constructor(private readonly prismaClient: PrismaService) {}

  public async findAll(): Promise<any> {
    const allMember = await this.prismaClient.member.findMany();
  }
}