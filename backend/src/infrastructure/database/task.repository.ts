import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { MemberId } from "../../domain/member/member-id";

@Injectable()
export class TaskRepository {
  constructor(private readonly prismaClient: PrismaService) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得
   */
  public async findAllAssignedByMemberId (): Promise<any> {
    return await this.prismaClient.task.findMany({
      include: {
        TaskAssignee: true
      }
    });
  }
}
