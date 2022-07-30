export interface UseCase<IRequest, IResponse> {
  findList(request?: IRequest) : Promise<IResponse> | IResponse;
}