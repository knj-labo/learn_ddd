import { MemberName } from "../../domain/member/member-name";
import { MemberEmail } from "../../domain/member/member-email";

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