import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';
import { TaskQueryServiceInterface } from '../../domain/task/query-service.interface';

import type { TaskDTO } from '../../usecase/task/task.dto';

/**
 * 複数のテーブルを結合して、DTOをに詰め替える
 * @see https://docs.microsoft.com/ja-jp/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/cqrs-microservice-reads
 * @see https://little-hands.hatenablog.com/entry/2019/12/02/cqrs
 */
@Injectable()
export class TaskQueryService extends TaskQueryServiceInterface {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.taskAssignee);
  }

  public async findTaskById(params: { id: number }): Promise<TaskDTO> {
    const task = await this.prisma.taskAssignee.findUnique({
      where: {
        id: params.id,
      },
      include: {
        task: true,
        member: true,
        taskProgressStatus: true,
      }
    });

    return {
      assignedMemberName: task.member.name,
      title: task.task.title,
      content: task.task.content,
      progressStatus: task.taskProgressStatus.name,
    }
  }

  public async findAll(prams: { memberId: number }): Promise<TaskDTO[]> {
    const tasks = await this.prisma.taskAssignee.findMany({
      where: {
        memberId: prams.memberId,
      },
      select: {
        id: true,
        task: {
          select: {
            title: true,
            content: true,
          },
        },
        member: {
          select: {
            name: true,
          },
        },
        taskProgressStatus: {
          select: {
            name: true,
          },
        },
      },
    });

    return tasks.map((task) => ({
        assignedMemberName: task.member.name,
        title: task.task.title,
        content: task.task.content,
        progressStatus: task.taskProgressStatus.name,
      }));
  }
}
