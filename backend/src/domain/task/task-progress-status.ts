import { ValueObject } from '../../utils/value-object';
import { DomainException } from '../../utils/domain-exception';

export interface ProgressStatusProps {
  name: 'untouched' | 'waiting' | 'done';
}
/**
 * @class 課題の進捗ステータスを表す値オブジェクト
 * @desc 進捗ステータスオブジェクトのドメインロジックを実装
 * 課題の進捗ステータスの検証をカプセル化
 */
export class TaskProgressStatus extends ValueObject<ProgressStatusProps> {
  /**
   * @param props
   */
  public constructor(props: ProgressStatusProps) {
    super(props);
  }

  protected get status(): string {
    return this.props.name;
  }

  /**
   * @desc 'untouched'か'waiting'か'done'かを判定
   */
  private static isValid(value: string): boolean {
    return value === 'untouched' || value === 'waiting' || value === 'done';
  }

  public static create(name): TaskProgressStatus {
    if (!this.isValid(name)) {
      throw new DomainException('ステータスが適切な値ではありません。');
    }
    return new TaskProgressStatus({ name: name });
  }
}
