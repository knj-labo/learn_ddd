/**
 * @class ドメインエンティティの比較に使用される識別子を実装
 */
export class Identifier<T> {
  private readonly value: T

  /**
   * 新規識別子を作成
   * @param value
   */
  constructor(value: T) {
    this.value = value
  }

  /**
   * @desc 識別子の比較
   * @param id
   */
  equals(id?: Identifier<T>): boolean {
    if (id === null || id === undefined) {
      return false
    }

    if (!(id instanceof this.constructor)) {
      return false
    }

    return id.toValue() === this.value
  }

  /**
   * @desc 識別子の値をstring型に変換して取得
   */
  toString() {
    return String(this.value)
  }

  /**
   * @desc 識別子の値を取得
   */
  toValue(): T {
    return this.value
  }
}