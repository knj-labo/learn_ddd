import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service'
import { MemberQueryServiceInterface } from "../../domain/member/query-service.interface";

import { MemberAggregate } from "../../domain/member/member.aggregate";
import type { MemberDTO } from "../../usecase/member/member.dto";

@Injectable()
export class MemberQueryService extends MemberQueryServiceInterface {
  constructor(private prisma: PrismaService) {
    super(prisma.member);
  }

  // 本来は member_idを引数に渡す
  public async find(): Promise<MemberDTO> {
    const member = await this.prisma.member.findUnique({
      where: {
        id: 1
      },
      include: {
        enrollmentStatus: true,
      }
    });
    return {
      name: member.name,
      email: member.email,
      enrollmentStatus: member.enrollmentStatus.name,
    }
  }

  public async findMemberById(id: number): Promise<MemberDTO> {
    const member = await this.prisma.member.findUnique({
      where: {
        id: id
      },
      include: {
        enrollmentStatus: true,
      }
    });
    return {
      name: member.name,
      email: member.email,
      enrollmentStatus: member.enrollmentStatus.name,
    }
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