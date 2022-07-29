import { AggregateRoot } from '../../utils/aggregate-root';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

interface TaskProps {
  assignedMemberId: string;
  title: string;
  content: string;
  progressStatus: 'untouched' | 'waiting' | 'done';
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
  private constructor(props: TaskProps, id: UniqueEntityID) {
    super({ ...props }, id);
  }

  private get assignedMemberId(): string {
    return this.props.assignedMemberId;
  }

  /**
   * タイトルを取得
   */
  private get title(): string {
    return this.props.title;
  }

  /**
   * コンテンツを取得
   */
  private get content(): string{
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
   * @param {UniqueEntityID} id
   */
  public get task() {
    return {
      assignedMemberId: this.assignedMemberId,
      title: this.title,
      content: this.content,
      progressStatus: this.progressStatus,
    }
  }

  /**
   *
   */
  public changeProgressStatus () {
    // TODO: check own task
    // TODO: validation(isDone)
    // TODO: change progress status
  }
}