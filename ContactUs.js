function val() {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phoneNumber = document.getElementById("PhoneNumber").value;
    let pref = document.getElementById("Pref").value;
    let newsletter = document.getElementById("newsletter").checked;
  
    if (name.length <= 5) {

      alert("Name must be more than 5 characters.");

    } else if (!email.endsWith("@gmail.com")) {

      alert("Email must be a Gmail address.");

    } else if (!phoneNumber.startsWith("08")) {

      alert("Phone number must be an Indonesian phone number");

    } else if (pref === "") {
      alert("Please select a preference.");
    } else if (!newsletter) {
      alert("You must agree to receive newsletters.");
    } else {
      alert("Start Slurping!");
    }
  }
  