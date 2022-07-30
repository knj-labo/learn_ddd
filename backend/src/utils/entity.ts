import { UniqueEntityID } from './unique-entity-id';

/**
 * @see //https://github.com/HenrikGr/ddd-typescript/blob/master/src/core/domain/Entity.ts
 */

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
  protected readonly _id: number

  public readonly props: T

  constructor(props: T, id?: number) {
    this._id = id
    this.props = props
  }
}


