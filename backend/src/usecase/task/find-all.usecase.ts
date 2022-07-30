import { Injectable } from '@nestjs/common';
import { BadRequestError } from '../../utils/bad-request-error';
import { ForbiddenError } from '../../utils/forbidden-error';
import { InternalServerError } from '../../utils/internal-server-error';
import { TaskDTO } from './task.dto';
import { TaskQueryService } from '../../infrastructure/database/task.query-service';

@Injectable()
export class FindAllTasksUsecase {
  constructor(private readonly taskQueryService: TaskQueryService) {}
  /**
   * 参加者に割り当てられたタスク一覧を取得
   */
  public async execute(id: number): Promise<TaskDTO[]> {
    return await this.taskQueryService.findAll({ memberId: id });
  }
}
