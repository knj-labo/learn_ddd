import { Controller, Get, Param } from '@nestjs/common';
import { TaskUsecase } from "../../usecase/task/task.usecase";

@Controller('api/v1/tasks/')
export class TaskController {
  constructor(private readonly TaskUsecase: TaskUsecase) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得する
   * @param id 参加者Id
   */
  @Get(':id')
  findAssignedTaskList(@Param('id') id: string) {
    const numberedId = Number(id);
    return this.TaskUsecase.findAllAssignedByMemberId(numberedId);
  }
}
