class Person {
  constructor(name, age, proffesion) {
    this.name = name;
    this.age = age;
    this.proffesion = proffesion;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.proffesion}`
    );
  }

  setAge(newAge) {
    this.age = newAge;
  }
}

const newPerson = new Person("test", 123, "test");
console.log(newPerson.hasOwnProperty("name"));

class Student extends Person {
  constructor(name, age) {
    super(name, age, "student");
  }

  doHomework() {
    console.log("Homework in progress");
  }
}

const student1 = new Student("Some name", 100);
student1.greet();

class Frontender extends Person {
  constructor(name, age) {
    super(name, age, "frontend developer");
  }

  getTask() {
    console.log("Go to Jira and get new free task");
  }
}

const frontendDev1 = new Frontender("Arturs", 24);
frontendDev1.greet();
