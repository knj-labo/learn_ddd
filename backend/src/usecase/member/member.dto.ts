import { MemberName } from "../../domain/member/member-name";
import { MemberEmail } from "../../domain/member/member-email";
import { Member } from "../../domain/member/member";
import { EnrollmentStatus } from "../../domain/member/member-enrollment-status";
export class MemberDTO {
  public readonly name: MemberName
  public readonly email: MemberEmail
  public readonly enrollmentStatus: string
  public constructor(props: { enrollmentStatus: string; name: MemberName; email: MemberEmail }) {
    const { name, email, enrollmentStatus} = props
    this.name = name
    this.email = email
    this.enrollmentStatus = enrollmentStatus
  }
}