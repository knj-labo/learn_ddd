import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得
   */
  public async findAllAssignedByMemberId (): Promise<any> {
    return await this.prismaClient.taskAssignee.findMany({
      where: {
        memberId: 1,
      },
      select: {
        id: true,
        task: {
          select: {
            title: true,
            content: true,
          }
        },
        member: {
          select: {
            name: true,
          }
        },
        taskProgressStatus: {
          select: {
            name: true,
          }
        },
      }
    });
  }
}
