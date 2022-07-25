import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GetAllEnrollmentStatusRepository{
  constructor(private readonly prismaClient: PrismaService) {}

  public async getStatus(id: number): Promise<any> {
    return await this.prismaClient.enrollmentStatus.findMany({
      where: {
        id: id,
      }
    });
  }
}
