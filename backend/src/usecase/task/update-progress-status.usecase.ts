import { Injectable } from '@nestjs/common';

import { TaskQueryService } from "../../infrastructure/database/task.query-service";

import type { TaskDTO } from './task.dto';
import { TaskService } from "../../domain/task/task.service";

@Injectable()
export class UpdateProgressStatusUsecase {
  constructor(
    private readonly taskService: TaskService,
    private readonly taskQueryService: TaskQueryService
  ) {}

  public async execute(request): Promise<void> {
    let task;
    try {
      task = await this.taskQueryService.findTaskById(request.id)
      this.taskService.updateProgressStatus(task)
    } catch (error) {
      // TODO: エラーハンドリング
    }
  }
}
