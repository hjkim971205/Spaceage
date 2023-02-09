export default class AgeCalculator {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }
  
  mercuryTime() {
    let mercury = this.earthAge/0.24;
    this.mercuryAge = parseFloat(mercury).toFixed(2);
  }

  venusTime() {
    let venus = this.earthAge/.62;
    this.venusAge = parseFloat(venus).toFixed(2);
  }
}