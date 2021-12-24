import { greet } from '../src';

describe('greet', () => {
  test('should say hello to strangers', () => {
    expect(greet()).toEqual('Hello stranger');
  });

  test('should say hello to people', () => {
    expect(greet('CM')).toEqual('Hello CM');
  });
});
