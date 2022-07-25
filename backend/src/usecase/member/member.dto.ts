import { UniqueEntityID } from "../../utils/unique-entity-id";
import { MemberName } from "../../domain/member/member-name";
import { MemberEmail } from "../../domain/member/member-email";

export class MemberDto {
  public readonly id: UniqueEntityID
  public readonly name: MemberName
  public readonly email: MemberEmail
  public readonly enrollmentStatus: string
  public constructor(props: { name: MemberName; id: UniqueEntityID, email: MemberEmail, enrollmentStatus: string }) {
    const { id, name, email, enrollmentStatus} = props
    this.id = id
    this.name = name
    this.email = email
    this.enrollmentStatus = enrollmentStatus
  }
}