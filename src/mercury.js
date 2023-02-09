export default class AgeCalculator {
  constructor(earthAge, sinceAge, futureAge) {
    this.earthAge = earthAge;
    this.sinceAge = earthAge - sinceAge;
    this.futureAge = futureAge - earthAge;
  }
  
  mercuryTime() {
    let mercury = this.earthAge/0.24;
    this.mercuryAge = parseFloat(mercury).toFixed(2);

    let mercurySince = this.sinceAge/.24;
    this.mercurySinceAge = parseFloat(mercurySince).toFixed(2);

    let mercuryFuture = this.futureAge/.24;
    this.mercuryFutureAge = parseFloat(mercuryFuture).toFixed(2);
  }

  venusTime() {
    let venus = this.earthAge/.62;
    this.venusAge = parseFloat(venus).toFixed(2);

    let venusSince = this.sinceAge/.62;
    this.venusSinceAge = parseFloat(venusSince).toFixed(2);

    let venusFuture = this.futureAge/.62;
    this.venusFutureAge = parseFloat(venusFuture).toFixed(2);
  }

  marsTime() {
    let mars = this.earthAge/1.88;
    this.marsAge = parseFloat(mars).toFixed(2);

    let marsSince = this.sinceAge/1.88;
    this.marsSinceAge = parseFloat(marsSince).toFixed(2);

    let marsFuture = this.futureAge/1.88;
    this.marsFutureAge = parseFloat(marsFuture).toFixed(2);
  }

  jupiterTime() {
    let jupiter = this.earthAge/11.86;
    this.jupiterAge = parseFloat(jupiter).toFixed(2);

    let jupiterSince = this.sinceAge/11.84;
    this.jupiterSinceAge = parseFloat(jupiterSince).toFixed(2);

    let jupiterFuture = this.futureAge/11.84;
    this.jupiterFutureAge = parseFloat(jupiterFuture).toFixed(2);
  }
}