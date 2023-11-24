const form = document.querySelector("form");

const inputFields = document.getElementsByTagName("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  Array.from(inputFields).forEach((inputField) => {
    const inputFieldName = inputField.name;
    const inputFieldValue = inputField.value;

    if (!inputFieldValue) {
      console.log("Field is required!");
      inputField.classList.add("error");
    }

    switch (inputFieldName) {
      case "username":
        break;
      case "email":
        console.log("Email is required!");
        break;
      default:
        break;
    }
  });
});

// const usernameInput = document.getElementById("username");
// const emailInput = document.getElementById("email");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const usernameValue = usernameInput.value;
//   const emailValue = emailInput.value;

//   if (!usernameValue) {
//     console.log("Username is required!");
//     usernameInput.classList.add("error");
//   } else if (usernameValue.length < 8 || usernameValue.length > 16) {
//     console.log("Username must be between 8 and 16 characters long!");
//     usernameInput.classList.add("error");
//   }
//   if (!emailValue) {
//     console.log("Email is required!");
//   }
// });
