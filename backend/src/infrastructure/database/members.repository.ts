import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class MembersRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  public async getAll(): Promise<any> {
    return await this.prismaClient.member.findMany({
      include: {
        enrollmentStatus: true,
      }
    });
  }
}
