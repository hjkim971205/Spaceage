import AgeCalculator from '../src/mercury.js';

describe('AgeCalculator', () => {

  test('should take in earth age to start with', () => {
    const earthAge = new AgeCalculator(24);
    expect(earthAge.earthAge).toEqual(24);
  })

  test('should take in the earth age and convert it to mercury age using the conversion', () => {
    const earthAge = new AgeCalculator(24);
    earthAge.mercuryTime();
    expect(earthAge.mercuryAge).toEqual("100.00");
  })
})