import { IRead } from './i-read';

/**
 * CQRSのQueryServiceを実装するためのインターフェース
 * @abstract 外部APIに接続するため
 */
export abstract class IQueryService<T> implements IRead<T> {
  find(id: string): Promise<T>{
    throw new Error("メソッドを理解できず、データに対して対応することができませんでした。");
  }
  findList(item: T): Promise<T[]> {
    throw new Error("メソッドを理解できず、データに対して対応することができませんでした。");
  }
}