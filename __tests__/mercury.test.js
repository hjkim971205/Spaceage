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

  test('should take in earth age to start with and calculate the years since', () => {
    const earthAge = new AgeCalculator(56, 43);
    expect(earthAge.sinceAge).toEqual(13);
  })

  test('should take in earth age to start with and calculate the years since if the person calculated time passed on mercury', () => {
    const earthAge = new AgeCalculator(56, 43);
    earthAge.mercuryTime();
    expect(earthAge.mercurySinceAge).toEqual("54.17");
  })

  test('should take in earth age to start with and calculate the years since if the person calculated time passed on venus', () => {
    const earthAge = new AgeCalculator(56, 43);
    earthAge.venusTime();
    expect(earthAge.venusSinceAge).toEqual("20.97");
  })

  test('should take in earth age to start with and calculate the years since if the person calculated time passed on mars', () => {
    const earthAge = new AgeCalculator(56, 43);
    earthAge.marsTime();
    expect(earthAge.marsSinceAge).toEqual("6.91");
  })

  test('should take in earth age to start with and calculate the years since if the person calculated time passed on jupiter', () => {
    const earthAge = new AgeCalculator(56, 43);
    earthAge.jupiterTime();
    expect(earthAge.jupiterSinceAge).toEqual("1.10");
  })

  test('should take in earth age to start with and calculate the years since', () => {
    const earthAge = new AgeCalculator(56, 43, 61);
    expect(earthAge.futureAge).toEqual(5);
  })

  test('should take in earth age to start with and calculate the years in the future if the person calculated time passed on mercury', () => {
    const earthAge = new AgeCalculator(56, 43, 61);
    earthAge.mercuryTime();
    expect(earthAge.mercuryFutureAge).toEqual("20.83");
  })

  test('should take in earth age to start with and calculate the years in the future if the person calculated time passed on venus', () => {
    const earthAge = new AgeCalculator(56, 43, 61);
    earthAge.venusTime();
    expect(earthAge.venusFutureAge).toEqual("8.06");
  })

  test('should take in earth age to start with and calculate the years in the future if the person calculated time passed on mars', () => {
    const earthAge = new AgeCalculator(56, 43,  61);
    earthAge.marsTime();
    expect(earthAge.marsFutureAge).toEqual("2.66");
  })

  test('should take in earth age to start with and calculate the years in the future if the person calculated time passed on jupiter', () => {
    const earthAge = new AgeCalculator(56, 43, 61);
    earthAge.jupiterTime();
    expect(earthAge.jupiterFutureAge).toEqual("0.42");
  })
})