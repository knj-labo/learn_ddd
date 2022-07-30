import { TaskTitle } from './task-title';
import { DomainException } from '../../utils/domain-exception';

describe('課題のタイトルを受け取った場合で', () => {
  it('適切な値だったとき、値オブジェクトを作成', () => {
    const TEST_TITLE = 'テスト課題';

    const result = TaskTitle.create(TEST_TITLE);
    expect(result.title).toBe(TEST_TITLE);
  });

  it('空文字だったとき、例外を投げる', () => {
    const TEST_TITLE = ' ';
    const ERROR_MESSAGE = 'タイトルを入力してください。';

    const result = () => TaskTitle.create(TEST_TITLE);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  });
});
