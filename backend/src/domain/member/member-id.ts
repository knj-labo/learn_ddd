
import { UniqueEntityID } from '@utils/unique-entity-id'
import { Entity } from '@utils/entity'

/**
 * @class MemberIdエンティティ
 * @extends Entity
 */
export class MemberId extends Entity<any> {
  private constructor(id?: UniqueEntityID) {
    super(null, id)
  }

  /**
   * @desc 一意なエンティティIDオブジェクトを取得
   */
  get id(): UniqueEntityID {
    return this._id
  }
}