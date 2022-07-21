import { AggregateRoot } from '@utils/aggregate-root'
import { UniqueEntityID } from '@utils/unique-entity-id'

import { MemberName } from '@domain/member/member-name'
import { MemberEmail } from '@domain/member/member-email'
import { EnrollmentStatus } from '@domain/member/member-enrollment-status'

export interface MemberProps {
  name: MemberName
  email: MemberEmail
  enrollmentStatus: EnrollmentStatus
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
  private constructor(props: MemberProps, id?: UniqueEntityID) {
    super(props, id)
  }

  /**
   * 集約にあるidを取得
   */
  get id(): UniqueEntityID {
    return this._id
  }

  /**
   * メンバー名を取得
   */
  get name(): MemberName {
    return this.props.name
  }

  /**
   * メンバーのメールアドレスを取得
   */
  get email(): MemberEmail {
    return this.props.email
  }

  /**
   * メンバーの在籍ステータスを取得
   */
  get enrollmentStatus(): EnrollmentStatus {
    return this.props.enrollmentStatus
  }

  /**
   * @param {IUserProps} props
   * @param {UniqueEntityID} id
   */
  public static create(props: MemberProps, id?: UniqueEntityID) {
    // not yet implemented
  }
}