import { Injectable } from "@nestjs/common";
import { BadRequestError} from "../../utils/bad-request-error";
import { ForbiddenError } from "../../utils/forbidden-error";
import { InternalServerError } from "../../utils/internal-server-error";
import { TaskRepository } from "../../infrastructure/database/task.repository";
import { TaskDTO } from "./task.dto";
import { TaskQueryService } from "../../infrastructure/database/task.query-service";


@Injectable()
export class TaskUsecase {
  constructor(private readonly taskQueryService: TaskQueryService) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得
   */
  public async findTaskList(id : number): Promise<TaskDTO[]> {
  try {
    return await this.taskQueryService.fetchByMemberId(id);
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