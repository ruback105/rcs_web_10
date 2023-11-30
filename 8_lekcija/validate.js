// Forma ko mēs validējam
const form = document.querySelector("form");

// Visi input laukumi
const inputFields = document.getElementsByTagName("input");

/* 
  Funkcija, kas izvada kļūdas paziņojumu atbilstošam input laukumam

  @param inputField - Input laukums, kuram jāizvada kļūda
  @param errorMessage - Kļūdas teksts
*/
function displayError(inputField, errorMessage) {
  inputField.classList.add("error"); // Input laukumam pievienojam error klasi

  // Kļūdam paziņojuma veidošana
  const errorParagraph = document.createElement("p");
  errorParagraph.classList.add("error");
  errorParagraph.textContent = errorMessage;
  errorParagraph.style.color = "red";
  errorParagraph.style.fontSize = "12px";

  // Input laukuma vecākam elementam pievienojam kļūdas paziņojumu
  inputField.parentElement.appendChild(errorParagraph);
}

// Klausamies uz formas submit notikumu
form.addEventListener("submit", (event) => {
  // Pārtraucam formas nosūtīšanu uz serveri
  event.preventDefault();
  let formHasErrors = false; // Flags vai validācijas laikā ir kļūdas

  Array.from(inputFields).forEach((inputField) => {
    // Pārbaudam, vai jau tagad eksistē kļūdas teksts
    const hasError = inputField.parentElement.querySelector("p.error");
    // Ja ir, tad pārtraucam validāciju
    if (hasError) {
      formHasErrors = true; // Validācijas laikā notika kļūda
      return; // Pārtraucam ciklu
    }

    const inputFieldName = inputField.name; // Input laukuma name attribute
    const inputFieldValue = inputField.value; // Input laukuma vērtība

    // !Boolean(inputFieldValue), Boolean("") === false, !false = true, teksts ir tukšs
    if (!inputFieldValue) {
      formHasErrors = true; // Validācijas laikā notika kļūda
      displayError(inputField, "Field is required!"); // Kļūdas izvade
      return; // Pārtraucam ciklu
    }

    // Validējam input laukumu pēc viņa name attribute
    switch (inputFieldName) {
      case "username":
        // Pārbaudam garumu
        if (inputFieldValue.length < 4 || inputFieldValue > 16) {
          formHasErrors = true; // Validācijas laikā notika kļūda
          displayError(inputField, "Input should be between 4 and 16 chars"); // Kļūdas izvade
        }
        break; // Pārtraucam switch ciklu
      case "email":
        //  Pārbaude pēc formāta
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailRegex.test(inputFieldValue)) {
          formHasErrors = true; // Validācijas laikā notika kļūda
          displayError(
            inputField,
            "Email should follow the pattern: test@gmail.com"
          ); // Kļūdas izvade
        }
        break; // Pārtraucam switch ciklu
      default:
        alert(`Please implement validation for field: ${inputFieldName}`);
    }
  });

  // After validation
  if (!formHasErrors) {
    // Pieprasījums uz serveri
  }
});

//  Noņēmam kļūdas stavokli, kad laukumam ir izmaiņas
Array.from(inputFields).forEach((inputField) => {
  // Klausamies uz input laukuma input notikumu
  inputField.addEventListener("input", () => {
    // Pārbaudam, vai input laukumam ir error klase
    const hasError = inputField.classList.contains("error");

    // Kļūda ir
    if (hasError) {
      inputField.classList.remove("error"); // Noņemam error klasi

      // Pārbaudam, vai input laukumam ir kļūdas teksts
      const errorParagraph = inputField.parentElement.querySelector("p.error");

      // Kļūdas teksts ir
      if (errorParagraph) {
        errorParagraph.remove(); // Noņemam kļūdas tekstu
      }
    }
  });
});
