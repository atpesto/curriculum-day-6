const isPromise = require('../src/isPromise');

const promise = { then: () => {} };

describe('calling isPromise', () => {
  describe('with a promise', () => {
    it('returns true', () => {
      expect(isPromise(promise)).toBe(true);
    });
  });
  describe('with null', () => {
    it('returns false', () => {
      expect(isPromise(null)).toBe(false);
    });
  });
  describe('with undefined', () => {
    it('returns false', () => {
      expect(isPromise(undefined)).toBe(false);
    });
  });
  describe('with an object', () => {
    it('returns false', () => {
      expect(isPromise({})).toBe(false);
      expect(isPromise({ then: true })).toBe(false);
    });
  });
  describe('with an array', () => {
    it('returns false', () => {
      expect(isPromise([])).toBe(false);
      expect(isPromise([true])).toBe(false);
    });
  });
});
