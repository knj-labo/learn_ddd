import type { QueryServiceInterface } from '../../utils/query-service.interface';
import type { Member } from './member';

export class MemberQueryServiceInterface implements QueryServiceInterface {
  protected _model;

  constructor(model) {
    this._model = model;
  }

  async findAll(params: {
    include: { enrollmentStatus: boolean };
  }): Promise<Member[]> {
    const { include } = params;

    return await this._model.findMany({
      include,
    });
  }
}
