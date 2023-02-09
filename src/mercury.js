export default class AgeCalculator {
  constructor(earthAge, sinceAge) {
    this.earthAge = earthAge;
    this.sinceAge = earthAge - sinceAge;
  }
  
  mercuryTime() {
    let mercury = this.earthAge/0.24;
    this.mercuryAge = parseFloat(mercury).toFixed(2);

    let mercurySince = this.sinceAge/.24;
    this.mercurySinceAge = parseFloat(mercurySince).toFixed(2);
  }

  venusTime() {
    let venus = this.earthAge/.62;
    this.venusAge = parseFloat(venus).toFixed(2);
  }

  marsTime() {
    let mars = this.earthAge/1.88;
    this.marsAge = parseFloat(mars).toFixed(2);
  }

  jupiterTime() {
    let jupiter = this.earthAge/11.86;
    this.jupiterAge = parseFloat(jupiter).toFixed(2);
  }
}