/**
 * @see https://github.com/HenrikGr/ddd-typescript/blob/master/src/core/domain/ValueObject.ts
 */

interface ValueObjectProps {
  [index: string]: any;
}

/**
 * @class 値オブジェクトを実装した抽象クラス
 */
export abstract class ValueObject<T extends ValueObjectProps> {
  /**
   * @desc 値オブジェクトの props は this.props に格納
   * サブクラスで getter を定義することで参照できるようにする
   */
  public props: T;

  /**
   * @desc 値オブジェクトの新規インスタンスの作成
   * @param props
   */
  protected constructor(props: T) {
    this.props = {
      ...props,
    };
  }

  /**
   * @desc 値オブジェクトの比較
   * @param value
   */
  public equals(value?: ValueObject<T>): boolean {
    if (value === null || value === undefined) {
      return false;
    }

    if (value.props === undefined) {
      return false;
    }

    return JSON.stringify(this.props) === JSON.stringify(value.props);
  }
}
