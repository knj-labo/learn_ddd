import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service'
import { MemberQueryServiceInterface } from "../../domain/member/query-service.interface";

import type { MemberDTO } from "../../usecase/member/member.dto";

@Injectable()
export class MemberQueryService extends MemberQueryServiceInterface {
  constructor(private prisma: PrismaService) {
    super(prisma.member);
  }

  public async findList(): Promise<MemberDTO[]> {
    const memberList = await this.prisma.member.findMany({
      include: {
        enrollmentStatus: true,
      }
    });

    return memberList.map(member => ({
        name: member.name,
        email: member.email,
        enrollmentStatus: member.enrollmentStatus.name,
      }))
  }
};