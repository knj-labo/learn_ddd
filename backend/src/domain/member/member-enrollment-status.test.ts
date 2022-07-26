import { MemberEnrollmentStatus } from './member-enrollment-status'

describe('参加者の在籍ステータスの場合で', () => {
  const TEST_ENROLLMENT_STATUS = 'enrolled';
  const TEST_ABSENCE_STATUS = 'absented';
  const TEST_WITHDRAWAL_STATUS = 'withdraw';
  const TEST_INVALID_STATUS = 'invalid';
    it(`${TEST_ENROLLMENT_STATUS}のとき`, () => {
        expect(new MemberEnrollmentStatus({name: TEST_ENROLLMENT_STATUS}).status).toEqual(TEST_ENROLLMENT_STATUS);
    })
  it(`${TEST_ABSENCE_STATUS}のとき`, () => {
    expect(new MemberEnrollmentStatus({name: TEST_ABSENCE_STATUS}).status).toEqual(TEST_ABSENCE_STATUS)
  })
  it(`${TEST_WITHDRAWAL_STATUS}のとき`, () => {
    expect(new MemberEnrollmentStatus({name: TEST_WITHDRAWAL_STATUS}).status).toEqual(TEST_WITHDRAWAL_STATUS)
  })

  it(`${TEST_INVALID_STATUS}のとき`, () => {
    const result = () => new MemberEnrollmentStatus({name: TEST_INVALID_STATUS}).status
    expect(() => result()).toThrow(new Error('ステータスが適切な値ではありません。'))
  })
})
