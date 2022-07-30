import { Controller, Get, Param } from '@nestjs/common';
import { FindAllTasksUsecase } from "../../usecase/task/find-all.usecase";

@Controller('api/v1/tasks/')
export class TaskController {
  constructor(private readonly findAllTasks: FindAllTasksUsecase) {}

  /**
   * 参加者に割り当てられたタスク一覧を取得する
   * @param id 参加者Id
   */
  @Get(':id')
  findAssignedTaskList(@Param('id') id: string) {
    const numberedId = Number(id);
    return this.findAllTasks.execute(numberedId);
  }
}
