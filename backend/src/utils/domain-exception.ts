/**
 * ドメイン例外エラー
 */
export class DomainException extends Error {
  constructor(message: string) {
    super(message);
  }
}