const minimalAge = 18;

const user1Age = 17;
const user2Age = 20;

if (user1Age >= minimalAge) {
  console.log("User1 is adult");
}

if (user2Age >= minimalAge) {
  console.log("User2 is adult");
} else {
  console.log("User2 is not adult");
}

const country = "USA";

if (country === "Lithuania") {
  console.log("Lithuania");
} else if (country === "Estonia") {
  console.log("Estonia");
} else if (country === "Germany") {
  console.log("Germany");
} else if (country === "Latvia") {
  console.log("Latvia");
} else {
  console.log("Unknown country");
}
