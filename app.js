// Getting data from form
const form = document.querySelector(".form");
const btnForm = document.querySelector(".block-4-form__input--btn");

btnForm.addEventListener("click", (e) => {
  e.preventDefault();
  const alertValid = document.querySelector(".text-alert-valid");
  const alertInvalid = document.querySelector(".text-alert-invalid");

  const regUserEmail =
    "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$";
  const form2 = new FormData(form);

  const inputEmail = form2.get("email");

  const regExp = new RegExp(regUserEmail);

  if (regExp.test(inputEmail)) {
    alertValid.style.display = "block";
    alertInvalid.style.display = "none";
  }

  if (!regExp.test(inputEmail)) {
    alertInvalid.style.display = "block";
    alertValid.style.display = "none";
  }
});
