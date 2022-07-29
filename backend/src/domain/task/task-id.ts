import { Entity } from '../../utils/entity';
import type { UniqueEntityID } from '../../utils/unique-entity-id';
import { ValueObject } from "../../utils/value-object";

/**
 * @class TaskIdエンティティ
 * @extends Entity
 */
export class TaskId extends ValueObject<any> {
  private constructor(id?: UniqueEntityID) {
    super(id);
  }

  /**
   * @desc 一意なエンティティIDオブジェクトを取得
   */
  public get id(): UniqueEntityID {
    return this.id;
  }
}
