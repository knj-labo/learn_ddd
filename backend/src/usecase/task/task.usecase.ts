import { Injectable } from "@nestjs/common";
import { TaskRepository } from "../../infrastructure/database/task.repository";


@Injectable()
export class TaskUsecase {
  constructor(private readonly taskRepository: TaskRepository) {}

  /**
   * 参加者一覧を取得する
   */
  public async findAllAssignedByMemberId(): Promise<any[]> {
  try {
    const tasks: any[] = await this.taskRepository.findAllAssignedByMemberId();
    return tasks.map(task => {
      return ({
        title: task.title,
        content: task.content,
        }
      )
    });
  } catch (error) {
    throw error;
  }
}
}