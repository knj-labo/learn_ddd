import type { QueryServiceInterface } from '../../utils/query-service.interface';
import type { MemberAggregate } from './member.aggregate';

export class MemberQueryServiceInterface implements QueryServiceInterface {
  protected _model;

  constructor(model) {
    this._model = model;
  }

  async findAll(params: {
    include: { enrollmentStatus: boolean };
  }): Promise<MemberAggregate[]> {
    const { include } = params;

    return await this._model.findMany({
      include,
    });
  }
}
