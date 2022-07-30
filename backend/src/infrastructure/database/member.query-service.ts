import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { IMemberQueryService } from "../../domain/member/i.member.query-service";

@Injectable()
export class MemberQueryService implements IMemberQueryService {
  constructor(private readonly prismaClient: PrismaService) {}

  public async findList(): Promise<any[]>{
    const memberList = await this.prismaClient.member.findMany({
      include: {
        enrollmentStatus: true,
      }
    });

    return memberList.map(member => {
      return ({
        name: member.name,
        email: member.email,
        enrollmentStatus: member.enrollmentStatus.name,
      })
    })
  }
}
