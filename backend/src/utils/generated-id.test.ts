import { GeneratedID } from "./generated-id";
import { NoneID } from "./none-id";

describe('発番されたIDを使用した場合で', () => {
  const DUMMY_VALUE = 'dummy_value';
  const NOT_EQUAL_VALUE = 'not_equal_value';
  const id = GeneratedID.of(DUMMY_VALUE);

  it(`isGenerated は true`, () => {
    expect(id.isGenerated).toBeTruthy();
  });

  it(`${DUMMY_VALUE} と等しい`, () => {
    expect(id.value).toBe(DUMMY_VALUE);
    expect(id.toString()).toBe(DUMMY_VALUE);
    expect(id.toJSON()).toBe(DUMMY_VALUE);
    expect(`id is ${id}`).toBe(`id is ${DUMMY_VALUE}`);
    expect(JSON.stringify({ id: id })).toBe(JSON.stringify({ id: DUMMY_VALUE }));
  });

  expect(id.equals(GeneratedID.of(DUMMY_VALUE))).toBeTruthy();
  expect(id.equals(DUMMY_VALUE)).toBeTruthy();

  it(`${DUMMY_VALUE} と等しくない`, () => {
    expect(id.equals(NOT_EQUAL_VALUE)).toBeFalsy();
    expect(id.equals(GeneratedID.of(NOT_EQUAL_VALUE))).toBeFalsy();
    expect(id.equals(NoneID.instance)).toBeFalsy();
  })
});