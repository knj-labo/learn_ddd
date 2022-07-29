import { Entity } from '../utils/entity';
import type { UniqueEntityID } from '../utils/unique-entity-id';

/**
 * @abstract AggregateRoot<T>
 * @extends Entity<T> props
 * @type
 * T refers to Props
 * @see https://github.com/4lessandrodev/types-ddd/blob/eded1cf4c7f966b6ba916a95be7569b7e25a951f/lib/core/entity.ts#L574
 */
export abstract class AggregateRoot<T> extends Entity<T> {
  get id(): UniqueEntityID {
    return this._id;
  }
}
