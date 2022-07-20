import { ID } from './id';

/**
 * @see https://zenn.dev/zamax/articles/bf33ba94d2b539
 */
export interface Entity<IDType extends ID> {
  readonly id: IDType;
}

