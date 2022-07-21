import { MemberName } from './member-name';

describe('参加者の名前を受け取った場合で', () => {
  it('適切な値だったとき、値オブジェクトを作成', () => {
    const TEST_NAME = 'テスト太郎';

    const result = MemberName.create(TEST_NAME);
    expect(result.name).toBe(TEST_NAME);
  });

  it('空文字だったとき、例外を投げる', () => {
    const TEST_EMAIL = ' ';
    const ERROR_MESSAGE = '名前を入力してください。';

    const result = () => MemberName.create(TEST_EMAIL);
    expect(() => result()).toThrow(new Error(ERROR_MESSAGE));
  });
});
