setTimeout(function () {
  fullyLoaded();
}, 1000);

function fullyLoaded() {
  $("#loader").fadeOut("slow");
}

function handleSubmit() {
  var firstName = $("#firstname").val();
  var lastName = $("#lastname").val();
  var email = $("#email").val();
  var message = $("#message").val();

  var allData = { firstName, lastName, email, message }; // creating object
}

function validate(event) {
  var alphaOnlyRegex = /^[a-zA-Z ]*$/; //alphabet regular expression
  var emailOnlyRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //email regular expression

  if (event.value) {
    switch (event.name) {
      case "firstname":
      case "lastname":
      case "subject":
        if (!event.value.match(alphaOnlyRegex)) {
          $("#" + event.name).val("");
          $("#" + event.name).focus();
        }

        break;
      case "email":
        if (!event.value.match(emailOnlyRegex)) {
          $("#" + event.name).val("");
          $("#" + event.name).focus();
        }
    }
  }
}
