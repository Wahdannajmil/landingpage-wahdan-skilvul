

function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;
  return { name, city, email, zipCode, status };
}

function isNumber(str) {
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function checkboxIsChecked() {
  const status = document.getElementById("status");
  if (status.checked) {
    return true;
  } else {
    return false;
  }
}

function validateFormData(formData) {
  if (
    formData &&
    formData.name &&
    formData.city &&
    !isNaN(parseInt(formData.zipCode)) &&
    document.getElementById("status").checked === true
  ) {
    return true;
  } else {
    return false;
  }
}

const myForm = document.getElementById("my-form")

function submit() {
  const formData = handleGetFormData();

  if (!validateFormData(formData)) {
    const warning = document.getElementById("warning");
    warning.textContent = "Periksa form anda sekali lagi";
  } else {
    const warning = document.getElementById("warning");
    warning.textContent = "";
    // myForm.submit();
  }
}

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
})
