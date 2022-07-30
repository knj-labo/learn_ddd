import { Injectable } from "@nestjs/common";
import { TaskRepository } from "../../infrastructure/database/task.repository";
import { TaskDTO } from "./task.dto";


@Injectable()
export class TaskUsecase {
  constructor(private readonly taskRepository: TaskRepository) {}

  /**
   * 参加者一覧を取得する
   */
  public async findAllAssignedByMemberId(): Promise<TaskDTO[]> {
  try {
    const tasks = await this.taskRepository.findAllAssignedByMemberId();
    return tasks.map(task => {
      return new TaskDTO({
        assignedMemberName: task.member.name,
        title: task.task.title,
        content: task.task.content,
        progressStatus: task.taskProgressStatus.name,
      })
    });
  } catch (error) {
    throw error;
  }
}
}