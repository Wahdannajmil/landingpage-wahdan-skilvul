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
  return !isNaN(input);
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


function submit(event) {
  // mencegah refresh pada page
  event.preventDefault();
  
  // mendapatkan data formulir
  const formData = {
    name: document.getElementById('name').value,
    city: document.getElementById('city').value,
    email: document.getElementById('email').value,
    zipCode: parseInt(document.getElementById('zip-code').value),
    status: document.getElementById('status').checked
  };
  
  // melakukan validasi formulir
  const isValid = validateFormData(formData);
  
  // menampilkan pesan kesalahan jika formulir tidak valid
  const warningDiv = document.getElementById('warning');
  if (!isValid) {
    warningDiv.innerText = 'Periksa form anda sekali lagi';
  } else {
    warningDiv.innerText = '';
  }
}

// menghubungkan function submit dengan form pada file HTML
const form = document.getElementById('myForm');
form.addEventListener('submit', submit);

