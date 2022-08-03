import { Injectable } from '@nestjs/common';

import { PrismaService } from '../..//database/prisma.service';

@Injectable()
export class MemberRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async updateMember(props: unknown): Promise<unknown> {
    return null
  }
}
