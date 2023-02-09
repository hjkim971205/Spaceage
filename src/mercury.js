export default function AgeCalculator(age) {
    this.age = age;
  }
  
  AgeCalculator.prototype.mercury = (earthAge) => {
    let mercuryYear = 0;
    mercuryYear = earthAge / 0.24;
  }
  