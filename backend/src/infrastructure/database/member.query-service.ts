import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

import { MemberQueryServiceInterface } from '../../domain/member/query-service.interface';
import { MemberDTO } from '../../usecase/member/member.dto';

@Injectable()
export class MemberQueryService extends MemberQueryServiceInterface {
  constructor(private prisma: PrismaService) {
    super(prisma.member);
  }

  public async findList(): Promise<MemberDTO[]> {
    const memberList = await this.prisma.member.findMany({
      include: {
        enrollmentStatus: true,
      },
    });

    return memberList.map((member) => {
      return {
        name: member.name,
        email: member.email,
        enrollmentStatus: member.enrollmentStatus.name,
      };
    });
  }
}
