import { Entity } from '../../utils/entity';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

/**
 * @class TaskIdエンティティ
 * @extends Entity
 */
export class TaskId extends Entity<any> {
  private constructor(id?: UniqueEntityID) {
    super(null, id);
  }

  /**
   * @desc 一意なエンティティIDオブジェクトを取得
   */
  get id(): UniqueEntityID {
    return this._id;
  }
}
