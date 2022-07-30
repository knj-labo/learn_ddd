import { DomainException } from '../../utils/domain-exception';

import {
  TaskProgressStatus
} from './task-progress-status';

import type {
  ProgressStatusProps} from './task-progress-status';


describe('課題の進捗ステータスの場合で', () => {
  // TODO: 有効な値を配列に格納して、includeを使って検証する
  const TEST_UNTOUCHED_STATUS = 'untouched';
  const TEST_WAITING_STATUS = 'waiting';
  const TEST_DONE_STATUS = 'done';
  const TEST_INVALID_STATUS = 'invalid';
  const ERROR_MESSAGE = 'ステータスが適切な値ではありません。';
  it(`${TEST_UNTOUCHED_STATUS}のとき`, () => {
    const props: ProgressStatusProps = {
      name: TEST_UNTOUCHED_STATUS,
    };
    const result = new TaskProgressStatus(props);
    expect(result).toEqual({ props: { name: TEST_UNTOUCHED_STATUS } });
  });

  it(`${TEST_WAITING_STATUS}のとき`, () => {
    const props: ProgressStatusProps = {
      name: TEST_WAITING_STATUS,
    };
    const result = new TaskProgressStatus(props);
    expect(result).toEqual({ props: { name: TEST_WAITING_STATUS } });
  });

  it(`${TEST_DONE_STATUS}のとき`, () => {
    const props: ProgressStatusProps = {
      name: TEST_DONE_STATUS,
    };
    const result = new TaskProgressStatus(props);
    expect(result).toEqual({ props: { name: TEST_DONE_STATUS } });
  });

  it(`${TEST_INVALID_STATUS}のとき`, () => {
    const props: ProgressStatusProps = {
      name: TEST_DONE_STATUS,
    };
    const result = () => TaskProgressStatus.create(props);
    expect(() => result()).toThrow(new DomainException(ERROR_MESSAGE));
  });
});
