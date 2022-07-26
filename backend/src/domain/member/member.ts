import { AggregateRoot } from '../../utils/aggregate-root';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

import type { MemberEmail } from './member-email';
import type { MemberName } from './member-name';

export interface MemberProps {
  name: MemberName;
  email: MemberEmail;
  enrollmentStatus: any;
}

/**
 * @class メンバー集約を実装
 * @extends AggregateRoot
 */
export class Member extends AggregateRoot<MemberProps> {
  /**
   * メンバーエンティティの作成
   * @private
   * @param {MemberProps} props
   * @param {UniqueEntityID} id
   */
  private constructor(props: MemberProps, id: UniqueEntityID) {
    const { name, email, enrollmentStatus } = props;
    super({ name, email, enrollmentStatus }, id);
  }

  /**
   * メンバー名を取得
   */
  public get name(): MemberName {
    return this.props.name;
  }

  /**
   * メンバーのメールアドレスを取得
   */
  public get email(): MemberEmail {
    return this.props.email;
  }

  /**
   * メンバーの在籍ステータスを取得
   */
  public get enrollmentStatus() {
    return this.props.enrollmentStatus;
  }

  /**
   * @param {IUserProps} props
   * @param {UniqueEntityID} id
   */
  public static create(props: MemberProps, id?: UniqueEntityID) {
    return new Member({ ...props }, id);
  }

  /**
   * @param {IUserProps} props
   * @param {UniqueEntityID} id
   */
  public get() {
    return {
      id: this.id.toString(),
      name: this.name,
      email: this.email,
      enrollmentStatus: this.enrollmentStatus,
    }
  }
}
