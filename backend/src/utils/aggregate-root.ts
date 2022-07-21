import { Entity } from '../utils/entity';
import type { UniqueEntityID } from '../utils/unique-entity-id';

export abstract class AggregateRoot<T> extends Entity<T> {
  get id(): UniqueEntityID {
    return this._id;
  }
}
