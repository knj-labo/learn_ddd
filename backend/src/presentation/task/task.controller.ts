import { Controller, Get } from '@nestjs/common';
import { TaskUsecase } from "../../usecase/task/task.usecase";

@Controller()
export class TaskController {
  constructor(private readonly TaskUsecase: TaskUsecase) {}

  @Get('api/v1/tasks')
  findAssignedTaskList() {
    return this.TaskUsecase.findAllAssignedByMemberId();
  }
}
