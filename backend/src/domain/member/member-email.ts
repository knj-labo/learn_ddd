import { ValueObject } from '@utils/value-object'

export interface MemberEmailProps {
  email: string
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
    super(props)
  }

  /**
   * @desc メンバーのメールアドレスを取得
   */
  get value(): string {
    return this.props.email
  }

  /**
   * @desc
   * @param email
   */
  public static create(email: string) {
    // Validate email address format
  }
}