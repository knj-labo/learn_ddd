import { AggregateRoot } from '../../utils/aggregate-root';

import type { MemberName } from './member-name';
import type { MemberEmail } from './member-email';

export interface MemberProps {
  name: MemberName;
  email: MemberEmail;
  enrollmentStatus: string;
}

/**
 * @class メンバー集約を実装
 * @extends AggregateRoot
 */
export class Member extends AggregateRoot<MemberProps> {

  public get name(): MemberName {
    return this.props.name;
  }

  public get email(): MemberEmail {
    return this.props.email;
  }

  public get enrollmentStatus(): string {
    return this.props.enrollmentStatus;
  }

  private constructor (props: MemberProps, id?: number) {
    super(props, id);
  }

  public static create(props: MemberProps): Member {
    return new Member(props);
  }
}
