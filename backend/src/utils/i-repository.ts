import { IWrite } from './i-write';

/**
 * Repositoryを実装するためのインターフェース
 * @abstract 外部APIに接続するため
 */
export abstract class IRepository<T> implements IWrite<T> {
  create(item: T): Promise<boolean> {
    throw new Error("メソッドを理解できず、データに対して対応することができませんでした。");
  }
  update(id: string, item: T): Promise<boolean> {
    throw new Error("メソッドを理解できず、データに対して対応することができませんでした。");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("メソッドを理解できず、データに対して対応することができませんでした。");
  }
}