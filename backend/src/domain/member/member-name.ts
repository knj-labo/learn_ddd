import { ValueObject } from '../../utils/value-object';
import { DomainException } from '../../utils/domain-exception';

interface MemberNameProps {
  value: string;
}

/**
 * @class MemberName
 * @description the member name class is a value object that encapsulates the validation logic
 * @see Member entit
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
   * @description 空文字ではないかを判定
   */
  private static isEmpty(name: string): boolean {
    return name.trim() !== '';
  }

  public static create(name: string): MemberName {
    if (!this.isEmpty(name)) {
      throw new DomainException('名前を入力してください。');
    }
    return new MemberName({ value: name });
  }
}
