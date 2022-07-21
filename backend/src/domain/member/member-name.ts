import { ValueObject } from '@utils/value-object';

interface MemberNameProps {
  name: string;
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
    super(props);
  }

  /**
   * @desc メンバー名を取得
   */
  get value(): string {
    return this.props.name;
  }

  /**
   * @desc 空文字ではないかを判定
   */
  private static isValid(name: string): boolean {
    return name.trim() === '';
  }

  public static create(name: string): MemberName {
    if (!this.isValid(name)) {
      throw new Error(`Invalid member name: ${name}`);
    }
    return new MemberName({ name });
  }
}
