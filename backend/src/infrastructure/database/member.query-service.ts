import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Member } from "../../domain/member/member";
import { MemberDTO } from "../../usecase/member/member.dto";

@Injectable()
export class MemberQueryService {
  constructor(private readonly prismaClient: PrismaService) {}

  public async fetchMemberList(): Promise<MemberDTO[]> {
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
