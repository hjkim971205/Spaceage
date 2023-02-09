import AgeCalculator from '../src/mercury.js';

describe('AgeCalculator', () => {

  test('should take in earth age to start with', () => {
    const age = new AgeCalculator(24);
    expect(age.age).toEqual(24);
  })
})