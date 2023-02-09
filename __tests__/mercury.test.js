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

  test('should take in the earth age and convert it to venus age using the conversion', () => {
    const earthAge = new AgeCalculator(62);
    earthAge.venusTime();
    expect(earthAge.venusAge).toEqual("100.00");
  })

  test('should take in the earth age and convert it to mars age using the conversion', () => {
    const earthAge = new AgeCalculator(188);
    earthAge.marsTime();
    expect(earthAge.marsAge).toEqual("100.00");
  })

  test('should take in the earth age and convert it to jupiter age using the conversion', () => {
    const earthAge = new AgeCalculator(1186);
    earthAge.jupiterTime();
    expect(earthAge.jupiterAge).toEqual("100.00");
  })
})