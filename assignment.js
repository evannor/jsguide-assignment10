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

const JSCourse = new Course("Javascript Course", 60, 199.99);
const DrawingCourse = new Course("Drawing Course", 25, 89.99);
console.log(JSCourse.pricePerHour());
console.log(JSCourse.courseSummary());
console.log(DrawingCourse.pricePerHour());
console.log(DrawingCourse.courseSummary());
