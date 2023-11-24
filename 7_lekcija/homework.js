const person = {
  name: "Lorem Ipsum",
  surname: "Dolor",
  age: 22,
  hobbies: [
    {
      name: "sport",
    },
    {
      name: "music",
    },
  ],
};

// console.log(person.hobbies[0].name);
// console.log(person.name);
// console.log(person.surname);

/* ----------- */
const currentColor = "yellow";

// if (currentColor === "green") {
//   console.log("You can drive");
// } else if (currentColor === "yellow") {
//   console.log("You need to stop");
// } else if (currentColor === "red") {
//   console.log("You need to wait for green light");
// } else {
//   console.log("Report to maintenance");
// }

/* ----------- */
const day = 2;

if (day === 1) {
  console.log("Monday");
} else if (day === 2) {
  console.log("Tuesday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Input is wrong");
}

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Input is wrong");
}
