import { Injectable } from "@nestjs/common";
import { BadRequestError} from "../../utils/bad-request-error";
import { ForbiddenError } from "../../utils/forbidden-error";
import { InternalServerError } from "../../utils/internal-server-error";
import { TaskRepository } from "../../infrastructure/database/task.repository";
import { TaskDTO } from "./task.dto";


@Injectable()
export class TaskUsecase {
  constructor(private readonly taskRepository: TaskRepository) {}

  /**
   * 参加者一覧を取得する
   */
  public async findAllAssignedByMemberId(id : number): Promise<TaskDTO[]> {
  try {
    const tasks = await this.taskRepository.findAllAssignedByMemberId(id);
    return tasks.map(task => {
      return new TaskDTO({
        assignedMemberName: task.member.name,
        title: task.task.title,
        content: task.task.content,
        progressStatus: task.taskProgressStatus.name,
      })
    });
  } catch (error) {
    if (error instanceof BadRequestError) {
      console.error(error.message);
      console.error(error.stack);
      return;
    }
    if (error instanceof ForbiddenError) {
      console.error(error.message);
      console.error(error.stack);
      return;
    }
    if (error instanceof InternalServerError) {
      console.error(error.message);
      console.error(error.stack);
      return;
    }
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
      return;
    }
    throw error;
  }
}
}