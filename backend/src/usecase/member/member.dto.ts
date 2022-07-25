import { UniqueEntityID } from "../../utils/unique-entity-id";
import { MemberName } from "../../domain/member/member-name";
import { MemberEmail } from "../../domain/member/member-email";

export class MemberDto {
  public readonly name: MemberName
  public readonly email: MemberEmail
  public readonly enrollmentStatus: string
  public constructor(props: { name: MemberName; email: MemberEmail, enrollmentStatus: string }) {
    const { name, email, enrollmentStatus} = props
    this.name = name
    this.email = email
    this.enrollmentStatus = enrollmentStatus
  }
}