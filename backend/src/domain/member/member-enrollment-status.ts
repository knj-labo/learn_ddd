import { DomainException } from '../../utils/domain-exception';
import { ValueObject } from '../../utils/value-object';

interface EnrollmentStatusProps {
  value: string;
}
/**
 * @class 参加者の在籍ステータスを表す値オブジェクト
 * @desc MemberEnrollmentStateオブジェクトのドメインロジックを実装
 * 参加者の在籍ステータスの検証をカプセル化
 */
export class MemberEnrollmentStatus extends ValueObject<EnrollmentStatusProps> {
  /**
   * 参加者の在籍ステータスを表す値オブジェクトの新規インスタンスを作成
   * @param props
   */
  public constructor(props: EnrollmentStatusProps) {
    super(props);
  }

  public get status(): string {
    return this.props.value;
  }

  /**
   * @desc 'enrolled'か'absented'か'withdraw'かを判定
   */
  private static isValid(value: string): boolean {
    return value === 'enrolled' || value === 'absented' || value === 'withdraw';
  }

  public static create(status: string): MemberEnrollmentStatus {
    if (!this.isValid(status)) {
      throw new DomainException('ステータスが適切な値ではありません。');
    }
    return new MemberEnrollmentStatus({ value: status });
  }
}
