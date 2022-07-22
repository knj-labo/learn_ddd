/**
 * @method {execute} ユースケースメソッド実装
 */
export interface UseCase<Request, Response> {
  execute(request?: Request): Promise<Response> | Response;
}
