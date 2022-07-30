import { QueryServiceInterface } from "../../utils/query-service.interface";
import { TaskDTO } from "../../usecase/task/task.dto";

export class TaskQueryServiceInterface implements QueryServiceInterface {
  protected _model;
  constructor(model) {
    this._model = model;
  }

  async findAll(params: {memberId: number}) :Promise<TaskDTO[]> {
    return await this._model.findMany({
      where: {
        memberId: params.memberId,
      }
    });
  }
}