import { MemberEmail } from './member-email';
import { DomainException } from '../../utils/domain-exception';

describe('参加者のメールアドレスを受け取った場合で', () => {
  it('適切な値だったとき、値オブジェクトを作成', () => {
    const TEST_EMAIL = 'kenji.tomita1996@gmail.com';

    const result = MemberEmail.create(TEST_EMAIL);
    expect(result.email).toBe(TEST_EMAIL);
  });

  it('不適切な値だったとき、例外を投げる', () => {
    const TEST_EMAIL = 'something wrong';
    const ERROR_MESSAGE = 'メールアドレスが正しいフォーマットではありません。';

    const result = () => MemberEmail.create(TEST_EMAIL);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  });
});
