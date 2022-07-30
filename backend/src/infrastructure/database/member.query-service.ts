import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { MemberDTO } from "../../usecase/member/member.dto";
import { IQueryService } from "../../utils/i-query-service";
import { Member } from "../../domain/member/member";

@Injectable()
export class MemberQueryService implements IQueryService<Member> {
  constructor(private readonly prismaClient: PrismaService) {}

  public async findList(): Promise<any>{
    const memberList = await this.prismaClient.member.findMany({
      include: {
        enrollmentStatus: true,
      }
    });

    return memberList.map(member => {
      return new MemberDTO({
          name: member.name,
          email: member.email,
          enrollmentStatus: member.enrollmentStatus.name,
        }
      )
    })
  }
}
