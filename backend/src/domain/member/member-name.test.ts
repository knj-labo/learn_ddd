import { DomainException } from '../../utils/domain-exception';

import { MemberName } from './member-name';

describe('参加者の名前を受け取った場合で', () => {
  it('適切な値だったとき、値オブジェクトを作成', () => {
    const TEST_NAME = 'テスト太郎';

    const result = MemberName.create(TEST_NAME);
    expect(result.props.value).toBe(TEST_NAME);
  });

  it('空文字だったとき、例外を投げる', () => {
    const TEST_NAME = ' ';
    const ERROR_MESSAGE = '名前を入力してください。';

    const result = () => MemberName.create(TEST_NAME);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  });
});
