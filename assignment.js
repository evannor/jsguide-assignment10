class Course {
  title;
  length = 0;
  price = 0;

  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const JSCourse = new Course("Javascript Course", 60, 199.99);
const DrawingCourse = new Course("Drawing Course", 25, 89.99);
console.log(JSCourse, DrawingCourse);
