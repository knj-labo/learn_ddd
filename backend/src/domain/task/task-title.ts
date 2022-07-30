import { ValueObject } from '../../utils/value-object';
import { DomainException } from '../../utils/domain-exception';

export interface TaskTitleProps {
  title: string;
}

/**
 * @class 課題のタイトルを表す値オブジェクト
 */
export class TaskTitle extends ValueObject<TaskTitleProps> {
  /**
   * @param props
   */
  private constructor(props: TaskTitleProps) {
    super(props);
  }

  public get title(): string {
    return this.props.title;
  }

  /**
   * @desc 空文字ではないかを判定
   */
  private static isValid(value): boolean {
    return value.trim() !== '';
  }

  /**
   * @desc ファクトリーメソッド
   */
  public static create(title: string): TaskTitle {
    if (!this.isValid(title)) {
      throw new DomainException('タイトルを入力してください。');
    }
    return new TaskTitle({ title: title });
  }
}
