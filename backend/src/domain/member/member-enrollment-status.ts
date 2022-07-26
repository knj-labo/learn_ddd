import { ValueObject } from '../../utils/value-object';

export interface EnrollmentStatus {
  name: string;
  ENROLLMENT: 'enrolled';
  ABSENCE: 'absented';
  WITHDRAWAL: 'withdraw';
}

interface EnrollmentStatusProps {
  name: string;
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
    if(!this.isValid(this.props.name)) {
      throw new Error('ステータスが適切な値ではありません。');
    }
    return this.props.name;
  }

  /**
   * @desc 'enrolled'か'absented'か'withdraw'かを判定
   */
  private isValid(value: string): boolean {
    return value === 'enrolled' || value === 'absented' || value === 'withdraw';
  }
}
