import { ValueObject } from '../../utils/value-object';
import { DomainException } from '../../utils/domain-exception';

interface TaskAssignedMemberIdProps {
  id: string;
}

/**
 * @class 課題担当者を表す値オブジェクト
 */
export class TaskAssignedMemberId extends ValueObject<TaskAssignedMemberIdProps> {
  /**
   * @param props
   */
  private constructor(props: TaskAssignedMemberIdProps) {
    super(props);
  }

  private get id(): string {
    return this.props.id;
  }

  /**
   * @desc 課題担当者Idが存在するか
   */
  private static isExisted(value: string | null): boolean {
    return value.trim() !== '' || value === null;
  }

  /**
   * @desc ファクトリーメソッド
   */
  public static create(id: string): TaskAssignedMemberId {
    if (!this.isExisted(id)) {
      throw new DomainException('タスク担当者を選択してください。');
    }
    return new TaskAssignedMemberId({ id: id });
  }
}
