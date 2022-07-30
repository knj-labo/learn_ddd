import { Entity } from '../../utils/entity';
import { ValueObject } from '../../utils/value-object';

import type { UniqueEntityID } from '../../utils/unique-entity-id';

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
