import { ID } from "./id";

/**
 * @desc 既に発番されたID
 * @see https://zenn.dev/zamax/articles/bf33ba94d2b539
 */
export class GeneratedID {
  static of(value: string): GeneratedID {
    return new this(value);
  }

  readonly isGenerated = true as const;

  private constructor(public readonly value: string) {}

  toString(): string {
    return this.value;
  }

  toJSON(): string {
    return this.value;
  }

  equals(other: string | ID): boolean {
    if (typeof other === 'string') {
      return this.value === other;
    }
      return other.equals(this.value);
  }
}