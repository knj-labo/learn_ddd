import { Entity } from '../../utils/entity';
import type { UniqueEntityID } from '../../utils/unique-entity-id';
import { ValueObject } from "../../utils/value-object";

/**
 * @class TaskIdエンティティ
 * @extends Entity
 */
export class Task extends ValueObject<any> {
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
