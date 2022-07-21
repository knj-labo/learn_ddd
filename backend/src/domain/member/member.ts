import { AggregateRoot } from '../../utils/aggregate-root';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

import type { MemberEmail } from './member-email';
import type { EnrollmentStatus } from './member-enrollment-status';
import type { MemberName } from './member-name';

export interface MemberProps {
  name: MemberName;
  email: MemberEmail;
  enrollmentStatus: EnrollmentStatus;
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
    super(props, id);
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
  public get enrollmentStatus(): EnrollmentStatus {
    return this.props.enrollmentStatus;
  }

  /**
   * @param {IUserProps} props
   * @param {UniqueEntityID} id
   */
  public static create(props: MemberProps, id?: UniqueEntityID) {
    return new Member({ ...props }, id);
  }
}
