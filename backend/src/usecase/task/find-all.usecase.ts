import { Injectable } from '@nestjs/common';

import { TaskQueryService } from '../../infrastructure/database/task.query-service';

import type { TaskDTO } from './task.dto';

@Injectable()
export class FindAllTasksUsecase {
  constructor(private readonly taskQueryService: TaskQueryService) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得
   */
  public execute(id: number): Promise<TaskDTO[]> {
    return this.taskQueryService.findAll({ memberId: id });
  }
}
