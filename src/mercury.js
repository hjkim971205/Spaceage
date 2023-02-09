export default class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  
  mercuryTime() {
    let mercury = this.earthAge/0.24;
    this.mercuryAge = parseFloat(mercury).toFixed(2);
  }
}