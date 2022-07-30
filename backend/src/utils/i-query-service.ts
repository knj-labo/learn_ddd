interface IRead<T> {
  findList(): Promise<T[]>;
}
/**
 * CQRSのQueryServiceを実装するためのインターフェース
 * @abstract 外部APIに接続するため
 */
export interface IQueryService<T> extends IRead<T> {
  findList(): Promise<T[]>
}

