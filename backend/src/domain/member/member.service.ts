import { MemberAggregate } from './member.aggregate';
import { MemberQueryService } from "../../infrastructure/database/member.query-service";
import { MemberName } from "./member-name";
import { MemberEmail} from "./member-email";
import { MemberEnrollmentStatus} from "./member-enrollment-status";
import { MemberRepository } from "../../infrastructure/database/members.repository";

export class MemberService {
  constructor(
    private memberQueryService: MemberQueryService,
    private memberRepository: MemberRepository
  ) {}

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