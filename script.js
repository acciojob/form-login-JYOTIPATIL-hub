function getFormvalue() {
  // Get values of first and last name from the form inputs
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;

  // Combine first and last name, then display using alert
  alert(firstName + " " + lastName);
}
