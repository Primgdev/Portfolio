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
async function submitForm() {

  const firstName = document.getElementById("firstname").value;
  const lastName = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  
  await sendEmail(email, subject, message);
  console.log('sendEmail', sendEmail);
  }
  
  function sendEmail(email, subject, message)
  {
    console.log('sendEmail', email, subject, message);
    Email.send(
      {
        Host:"smtp.elasticemail.com",
        Username : "pritamsitesupp@gmail.com",
        Password : '52475D63EF2859E671B800355AB2B27BFCBD',
        To : email,
        From : 'pritamsitesupp@gmail.com',
        Subject : subject,
        Body : message
      }).then(message => console.log(message))
  }

