/**
 * CQRSのQueryServiceを実装するためのインターフェース
 * @interface 外部APIに接続するため
 */
export interface IQueryService<T> {
  findList(): Promise<T[]>;
}