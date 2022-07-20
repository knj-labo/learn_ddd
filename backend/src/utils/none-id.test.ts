import { NoneID } from "./none-id";
import { GeneratedID } from "./generated-id";

describe('発番されたIDを使用した場合で', () => {
  const id = NoneID.instance;
  const ANY_VALUE = 'any_value';
  it('isGenerated のときは false', () => {
    expect(id.isGenerated).toBeFalsy();
  });

  it('toString, toJSONのときは 例外をなげる', () => {
    expect(() => id.toString()).toThrow();
    expect(() => id.toJSON()).toThrow();
  });

  it('NoneID.instance の値のときは等しい', () => {
    expect(id.equals(NoneID.instance)).toBeTruthy();
  });

  it('NoneID.instance 以外の値のときは等しくない', () => {
    expect(id.equals(ANY_VALUE)).toBeFalsy();
    expect(id.equals(GeneratedID.of(ANY_VALUE))).toBeFalsy();
  });
});