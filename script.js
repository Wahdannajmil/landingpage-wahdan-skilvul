function handleGetFormData() {
  const name = document.getElementById('name').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  const zipCode = document.getElementById('zip-code').value;
  const status = document.getElementById('status').checked;
  
  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status
  };
}

function isNumber(input) {
  return !isNaN(input); //apakah input bukan angka 
}

function checkboxIsChecked() {
  const status = document.getElementById('status');
  return status.checked;
}

function validateFormData(formData) {
  if (!formData) {
    return false;
  }
  
  if (!isNumber(formData.zipCode)) {
    return false;
  }
  if (!checkboxIsChecked()) {
    return false;
  }
  return true;
}