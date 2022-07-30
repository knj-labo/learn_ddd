import { MemberName } from "../../domain/member/member-name";

export class MemberDTO {
  public readonly name: string
  public readonly email: string
  public readonly enrollmentStatus: string
  public constructor(props: { enrollmentStatus: string; name: string; email: string}) {
    const { name, email, enrollmentStatus} = props
    this.name = name
    this.email = email
    this.enrollmentStatus = enrollmentStatus
  }
}