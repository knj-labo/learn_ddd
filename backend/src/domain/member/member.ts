import { AggregateRoot } from '../../utils/aggregate-root';
import type { UniqueEntityID } from '../../utils/unique-entity-id';

import type { MemberEmail } from './member-email';
import type { MemberName } from './member-name';

export interface MemberProps {
  name: MemberName;
  email: string;
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

  public get email(): string {
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
