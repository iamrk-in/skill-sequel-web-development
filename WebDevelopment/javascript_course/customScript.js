function printError(elementId, errorMessage) {
  document.getElementById(elementId).innerHTML = errorMessage;
}

function checkForm() {
  let firstName = document.frm.firstName.value;

  // error variables
  let firstNameErr = true;

  // check firstName
  if (firstName == "") {
    printError("firstNameErr", "please enter firstName");
  } else {
    let regex = /^[a-z A-Z]{4,8}$/;
    if (regex.test(firstName) === false) {
      printError("firstNameErr", "invalid entry of firstName");
    } else {
      printError("firstNameErr", "");
    }
  }

  if (firstNameErr == true) {
    return false;
  } else {
    var dataPreview = `
            User Details \n 
            ----------------------------- \n 
            First Name: ${firstName} \n
        `;
    alert(dataPreview);
  }
}
