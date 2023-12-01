function validateForm() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Email validation
  if (!emailPattern.test(email)) {
    alert("Invalid email address");
    return false;
  }

  // Password validation
  if (pass.length < 8) {
    alert("Password must be at least 8 characters long");
    return false;
  }

  if (pass.length >= 1000) {
    alert("Password is too long");
    return false;
  }

  return true; // Form is valid
}
