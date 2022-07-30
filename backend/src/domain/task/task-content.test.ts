import { TaskContent } from './task-content';
import { DomainException } from '../../utils/domain-exception';

describe('課題の内容を受け取った場合で', () => {
  it('適切な値だったとき、値オブジェクトを作成', () => {
    const TEST_CONTENT = 'テスト内容';

    const result = TaskContent.create(TEST_CONTENT);
    expect(result.props.content).toBe(TEST_CONTENT);
  });

  it('空文字だったとき、例外を投げる', () => {
    const TEST_CONTENT = ' ';
    const ERROR_MESSAGE = '内容を入力してください。';

    const result = () => TaskContent.create(TEST_CONTENT);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  });
});
