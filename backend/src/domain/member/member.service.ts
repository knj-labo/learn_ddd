import { MemberAggregate } from './member.aggregate';
import { MemberQueryService } from "../../infrastructure/database/member.query-service";
import { MemberName } from "./member-name";
import { MemberEmail } from "./member-email";
import { MemberEnrollmentStatus } from "./member-enrollment-status";
import { MemberRepository } from "../../infrastructure/database/members.repository";

/**
 * @class 参加者ドメインサービス
 * @see https://khalilstemmler.com/articles/typescript-domain-driven-design/updating-aggregates-in-domain-driven-design/
 * @deprecated
 */
export class MemberService {
  private memberName;
  private memberEmail;
  private memberEnrollmentStatus

  constructor(
    private memberQueryService: MemberQueryService,
    private memberRepository: MemberRepository,
  ) {
    this.memberName = MemberName,
    this.memberEmail = MemberEmail
    this.memberEnrollmentStatus = MemberEnrollmentStatus
  }

  public async updateEmail(updateEmailDTO) {
    const memberEntity = await this.memberQueryService.find();
    const memberModel = MemberAggregate.update({
      name: MemberName.create(memberEntity.name),
      email: MemberEmail.create(memberEntity.email),
      enrollmentStatus: MemberEnrollmentStatus.create(memberEntity.enrollmentStatus)
    }, updateEmailDTO.id)

    this.memberRepository.updateMember(memberModel);
  }
}
