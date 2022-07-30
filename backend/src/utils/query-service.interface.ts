/**
 * CQRSのQueryServiceを実装するためのインターフェース
 * @interface 外部APIに接続するため
 */
export interface QueryServiceInterface {
  findAll(params: any): Promise<any>;
}
