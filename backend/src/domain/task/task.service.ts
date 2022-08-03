import { TaskAggregate } from './task.aggregate';
import { TaskQueryService } from "../../infrastructure/database/task.query-service";
import { TaskTitle } from "./task-title";
import { TaskContent } from "./task-content";
import { TaskProgressStatus } from "./task-progress-status";
import { TaskRepository } from "../../infrastructure/database/task.repository"
/**
 * @class 課題ドメインサービス
 * @see https://khalilstemmler.com/articles/typescript-domain-driven-design/updating-aggregates-in-domain-driven-design/
 */
export class TaskService {
  private taskTitle;
  private taskContent;
  private taskProgressStatus;
  private taskAggregate;
  constructor(
    private taskQueryService: TaskQueryService,
    private taskRepository: TaskRepository,
  ) {
    this.taskTitle = TaskTitle;
    this.taskContent = TaskContent;
    this.taskProgressStatus = TaskProgressStatus;
    this.taskAggregate = TaskAggregate;
  }

  public async updateProgressStatus(updateProgressStatusDTO) {
    const taskEntity = await this.taskQueryService.findTaskById({ id: 1 });
    const taskModel = this.taskAggregate.update({
      title: this.taskTitle.create(taskEntity.title),
      content: this.taskContent.create(taskEntity.content),
      progressStatus: this.taskProgressStatus.create(taskEntity.progressStatus)
  }, updateProgressStatusDTO.id)

    this.taskRepository.updateProgressStatus(taskModel);
  }
}