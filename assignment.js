class Course {
  title;
  length = 0;
  price = 0;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }

  pricePerHour() {
    return this.length / this.price;
  }

  courseSummary() {
    return `${this.title} is a great ${this.length} hour course for only \$${this.price}.`;
  }
}

class PracticalCourse extends Course {
  numofExercises;

  constructor(title, length, price, numofExercises) {
    super(title, length, price);
    this.numofExercises = numofExercises;
  }
}
class TheoreticalCourse extends Course {
  constructor(title, length, price) {
    super(title, length, price);
  }

  publish() {
    return `Now is the time to publish this course!`;
  }
}

const BeatTaxSeason = new PracticalCourse("Beat Tax Season", 75, 129.99, 35);
const MusicTheory = new TheoreticalCourse("Music Theory", 125, 299.99);

console.log(BeatTaxSeason);
console.log(BeatTaxSeason.numofExercises);
console.log(BeatTaxSeason.courseSummary());
console.log(MusicTheory);
console.log(MusicTheory.publish());
