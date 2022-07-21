import { UniqueEntityID } from '@utils/unique-entity-id';

/**
 * @see //https://github.com/HenrikGr/ddd-typescript/blob/master/src/core/domain/Entity.ts
 */

/**
 * @desc エンティティの比較
 * @param v
 */
const isEntity = (v: any): v is Entity<any> => v instanceof Entity;

/**
 * @class エンティティクラスを実装
 *
 * @desc モデルの不変性を保証するために、エンティティを使用
 * ドメインロジックを実装
 * - なにができるか
 * - いつ、何ができるか
 * - どのような条件でできるかを表現
 *
 * @param T 値オブジェクト
 */
export abstract class Entity<T> {
  /**
   * @desc インスタンス化された後に変更できないように読み取り専用
   */
  protected readonly _id: UniqueEntityID;

  /**
   * @desc 値オブジェクトの props は this.props に格納
   * サブクラスで getter を定義することで参照できるようにする
   */
  public readonly props: T;

  /**
   * @desc エンティティの新規インスタンスの作成
   * @param 値オブジェクト, id
   */
  constructor(props: T, id?: UniqueEntityID) {
    this._id = id || new UniqueEntityID();
    this.props = props;
  }

  /**
   * @param object
   */
  public equals(object?: Entity<T>): boolean {
    if (object == null) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
