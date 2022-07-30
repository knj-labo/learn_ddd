import { AggregateRoot } from '../../utils/aggregate-root';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

import { TaskAssignedMemberId } from './task-assigned-member-id';
import { TaskTitle } from './task-title';
import { TaskContent } from './task-content';
import { TaskProgressStatus } from './task-progress-status';

interface TaskProps {
  assignedMemberId: TaskAssignedMemberId;
  title: TaskTitle;
  content: TaskContent;
  progressStatus: TaskProgressStatus;
}

/**
 * @class 課題集約を実装
 * @extends AggregateRoot
 */
export class Task extends AggregateRoot<TaskProps> {
  /**
   * メンバーエンティティの作成
   * @private
   * @param {TaskProps} props
   * @param {UniqueEntityID} id
   */
  private constructor(props: TaskProps, id: number) {
    super({ ...props }, id);
  }

  private get assignedMemberId(): TaskAssignedMemberId {
    return this.props.assignedMemberId;
  }

  /**
   * タイトルを取得
   */
  private get title(): TaskTitle {
    return this.props.title;
  }

  /**
   * コンテンツを取得
   */
  private get content(): TaskContent {
    return this.props.content;
  }

  /**
   * 課題の進捗ステータスを取得
   */
  private get progressStatus() {
    return this.props.progressStatus;
  }

  /**
   * @param {IUserProps} props
   * @param {number} id
   */
  public get task() {
    return {
      assignedMemberId: this.assignedMemberId,
      title: this.title,
      content: this.content,
      progressStatus: this.progressStatus,
    };
  }

  /**
   *
   */
  public changeProgressStatus() {
    // TODO: check own task
    // TODO: validation(isDone)
    // TODO: change progress status
  }
}
