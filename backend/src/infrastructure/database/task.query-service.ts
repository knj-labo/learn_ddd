import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TaskDTO } from "../../usecase/task/task.dto";
import { TaskRepository } from "./task.repository";


/**
 * 複数のテーブルを結合して、DTOをに詰め替える
 * @see https://docs.microsoft.com/ja-jp/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/cqrs-microservice-reads
 * @see https://little-hands.hatenablog.com/entry/2019/12/02/cqrs
 */
@Injectable()
export class TaskQueryService {
  constructor(private readonly prismaClient: PrismaService) {}

  public async fetchByMemberId(id: number): Promise<TaskDTO[]> {
    const tasks = await this.prismaClient.taskAssignee.findMany({
      where: {
        memberId: id,
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

    return tasks.map(task => {
      return new TaskDTO({
        assignedMemberName: task.member.name,
        title: task.task.title,
        content: task.task.content,
        progressStatus: task.taskProgressStatus.name,
      })
    });
  }
}
