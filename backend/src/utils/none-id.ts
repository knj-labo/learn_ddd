import { ID } from "./id";

/**
 * @desc まだ発番されてないID
 * @see https://zenn.dev/zamax/articles/bf33ba94d2b539
 */
export class NoneID {
  static readonly instance = new NoneID();

  readonly isGenerated = false as const;

  private constructor() {}

  toString(): never {
    throw new Error('NoneID cloud not to be converted to string');
  }

  toJSON(): never {
    throw new Error('NoneID cloud not to be converted to JSON');
  }

  equals(other: string | ID ): boolean {
    return typeof other !== 'string' && !other.isGenerated;
  }
}