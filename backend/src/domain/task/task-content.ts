import { ValueObject } from '../../utils/value-object';
import { DomainException } from '../../utils/domain-exception';

interface TaskContentProps {
  content: string;
}

/**
 * @class 課題のタイトルを表す値オブジェクト
 */
export class TaskContent extends ValueObject<TaskContentProps> {
  /**
   * @param props
   */
  private constructor(props: TaskContentProps) {
    super(props);
  }

  private get content(): string {
    return this.props.content;
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
  public static create(content: string): TaskContent {
    if (!this.isValid(content)) {
      throw new DomainException('内容を入力してください。');
    }
    return new TaskContent({ content: content });
  }
}
