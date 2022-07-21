import { ValueObject } from '@utils/value-object'

interface MemberNameProps {
  name: string
}

/**
 * @class メンバー名を表す値オブジェクト
 */
export class MemberName extends ValueObject<MemberNameProps> {

  /**
   * メンバー名を表す値オブジェクトの新規インスタンスを作成
   * @param props
   */
  private constructor(props: MemberNameProps) {
    super(props)
  }

  /**
   * @desc メンバー名を取得
   */
  get value(): string {
    return this.props.name
  }
}