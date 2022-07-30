import { Entity } from '../../utils/entity';

/**
 * @class MemberIdエンティティ
 * @extends Entity
 */
export class MemberId extends Entity<any> {
  private constructor(id?: number) {
    super(null, id);
  }

  /**
   * @desc 一意なエンティティIDオブジェクトを取得
   */
  get id(): number {
    return this._id;
  }
}
