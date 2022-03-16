import { Entry } from './entry';

describe('Entry', () => {
  it('should create an instance', () => {
    expect(
      new Entry('Event', new Date())
    ).toBeTruthy();
  });
});
