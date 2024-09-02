import { sayHello } from '.';

describe('sayHello', () => {
  it('should return "Hello, world!"', () => {
    expect(sayHello()).toBe('Hello, world!');
  });
});
