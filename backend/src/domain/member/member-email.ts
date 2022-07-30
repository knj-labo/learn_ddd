import { DomainException } from '../../utils/domain-exception';
import { ValueObject } from '../../utils/value-object';

export interface MemberEmailProps {
  email: string;
}

/**
 * @class メンバーのメールアドレスを表す値オブジェクト
 * @desc MemberEmailオブジェクトのドメインロジックを実装
 * ユーザーのメールアドレスの検証をカプセル化
 */
export class MemberEmail extends ValueObject<MemberEmailProps> {
  /**
   * メンバーのメールアドレスを表す値オブジェクトの新規インスタンスを作成
   * @param props
   */
  private constructor(props: MemberEmailProps) {
    super(props);
  }

  public get email(): string {
    return this.props.email;
  }

  /**
   * @desc 空文字ではないかを判定
   */
  private static isValid(email: string): boolean {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email));
  }

  /**
   * @desc
   * @param email
   */
  public static create(email: string): MemberEmail {
    if (!this.isValid(email)) {
      throw new DomainException(
        'メールアドレスが正しいフォーマットではありません。',
      );
    }
    return new MemberEmail({ email });
  }
}
