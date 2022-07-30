import { MemberEnrollmentStatus } from './member-enrollment-status'
import { DomainException } from '../../utils/domain-exception';

describe('参加者の在籍ステータスの場合で', () => {
  const TEST_ENROLLMENT_STATUS = 'enrolled';
  const TEST_ABSENCE_STATUS = 'absented';
  const TEST_WITHDRAWAL_STATUS = 'withdraw';
  const TEST_INVALID_STATUS = 'invalid';
  const ERROR_MESSAGE = 'ステータスが適切な値ではありません。';

  it(`${TEST_ENROLLMENT_STATUS}のとき`, () => {
    expect(new MemberEnrollmentStatus({value: TEST_ENROLLMENT_STATUS}).status).toEqual(TEST_ENROLLMENT_STATUS);
  })
  it(`${TEST_ABSENCE_STATUS}のとき`, () => {
    expect(new MemberEnrollmentStatus({value: TEST_ABSENCE_STATUS}).status).toEqual(TEST_ABSENCE_STATUS)
  })
  it(`${TEST_WITHDRAWAL_STATUS}のとき`, () => {
    expect(new MemberEnrollmentStatus({value: TEST_WITHDRAWAL_STATUS}).status).toEqual(TEST_WITHDRAWAL_STATUS)
  })

  it(`${TEST_INVALID_STATUS}のとき`, () => {
    const result = () => MemberEnrollmentStatus.create(TEST_INVALID_STATUS);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  })
})
