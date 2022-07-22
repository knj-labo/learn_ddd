import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma-service';
import { Prisma } from '@prisma/client';

@Injectable()
export class MemberService {
  constructor(private prisma: PrismaService) {}
  async getAllMembers(): Promise<any[]> {
    return this.prisma.member.findMany();
  }
}
