import { AggregateRoot } from '../../utils/aggregate-root';

import type { MemberEmail } from './member-email';
import type { MemberEnrollmentStatus } from './member-enrollment-status';
import type { MemberName } from './member-name';

export interface MemberProps {
  name: MemberName;
  email: MemberEmail;
  enrollmentStatus: MemberEnrollmentStatus;
}
/**
 * @class メンバー集約を実装
 * @extends AggregateRoot
 */
export class MemberAggregate extends AggregateRoot<MemberProps> {
  public get name(): MemberName {
    return this.props.name;
  }

  public get email(): MemberEmail {
    return this.props.email;
  }

  public get enrollmentStatus(): MemberEnrollmentStatus {
    return this.props.enrollmentStatus;
  }

  private constructor(props: MemberProps, id?: number) {
    super(props, id);
  }

  public static create(props: MemberProps): MemberAggregate {
    return new MemberAggregate(props);
  }

  public static update(props: MemberProps, id: number): MemberAggregate {
    return new MemberAggregate(props, id);
  }
}
