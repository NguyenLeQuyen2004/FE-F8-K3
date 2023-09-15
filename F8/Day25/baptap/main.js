const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const overlay = $(".overlay");
const loginBtn = $(".login-btn");
const formBlock = $(".form-block");

function showLoginForm() {
  formBlock.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
  handleClearForm($(".login-form"));
  handleClearForm($(".register-form"));
  handleActiveLoginTab();
}

loginBtn.addEventListener("click", showLoginForm);

overlay.addEventListener("click", () => {
  formBlock.setAttribute("hidden", "hidden");
  overlay.setAttribute("hidden", "hidden");
});

const lgEmail = $(".login-form .email");
const lgPass = $(".login-form .password");
const lgSubmit = $(".login-form .submit-btn");
const lgSuccess = $(".login-form .success");
const lgPassToggle = $("#login-pass-toggle");

function emailValidator(field) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@((([^<>()\[\]\\.,;:\s@\"]+\.)+[^<>()\[\]\\.,;:\s@\"]{2,}))$/;
  const emailMess = field.parentElement.parentElement.querySelector(
    ".form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    emailMess.innerText = "Không được để trống";
    isValid = false;
  } else if (regex.test(field.value.trim())) {
    emailMess.innerText = "";
    isValid = true;
  } else {
    emailMess.innerText = "Email không hợp lệ";
    isValid = false;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function requiredField(field) {
  const mess = field.parentElement.parentElement.querySelector(
    ".form-message"
  );
  let isValid;
  if (field.value.trim() === "") {
    mess.innerText = "Không được để trống";
    isValid = false;
  } else {
    mess.innerText = "";
    isValid = true;
  }
  handleInputValidation(field, isValid);
  return isValid;
}

function handleInputValidation(field, isValid) {
  if (isValid) {
    field.parentElement.classList.remove("error");
  } else {
    field.parentElement.classList.add("error");
  }
}

const lgValidateAll = () => {
  const isEmailValid = emailValidator(lgEmail);
  const isPassValid = requiredField(lgPass);
  return isEmailValid && isPassValid;
};

lgEmail.addEventListener("input", () => {
  emailValidator(lgEmail);
  lgSuccess.innerText = "";
});

lgPass.addEventListener("input", () => {
  requiredField(lgPass);
  lgSuccess.innerText = "";
});

lgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (lgValidateAll()) {
    lgSuccess.innerText = "Account not existed";
  }
});

function handleShowPassword() {
  const inputWrap = this.parentElement;
  const passToggle = inputWrap.querySelector("i");
  const passwordInput = inputWrap.querySelector(".password");
  if (inputWrap.querySelector('[type="checkbox"]').checked) {
    passToggle.className = "fa-regular fa-eye-slash";
    passwordInput.type = "text";
  } else {
    passToggle.className = "fa-regular fa-eye";
    passwordInput.type = "password";
  }
}

lgPassToggle.addEventListener("change", handleShowPassword);

const loginActive = $(".login-tab.active-tab");
const loginTab = $(".login-tab");
const registerTab = $(".register-tab");

function handleActiveLoginTab() {
  loginTab.classList.add("active-tab");
  registerTab.classList.remove("active-tab");
  $(".login-form").style.display = "block";
  $(".register-form").style.display = "none";
  handleClearForm($(".register-form"));
}

loginTab.addEventListener("click", handleActiveLoginTab);

registerTab.addEventListener("click", () => {
  registerTab.classList.add("active-tab");
  loginTab.classList.remove("active-tab");
  $(".login-form").style.display = "none";
  $(".register-form").style.display = "block";
  handleClearForm($(".login-form"));
});

if (loginActive) {
  $(".login-form").style.display = "block";
  $(".register-form").style.display = "none";
} else {
  $(".login-form").style.display = "none";
  $(".register-form").style.display = "block";
}

function handleClearForm(form) {
  const inputWraps = form.querySelectorAll(".input-wrap");
  const inputs = form.querySelectorAll("input");
  const formMess = form.querySelectorAll(".form-message");
  for (let i = 0; i < inputWraps.length; i++) {
    inputWraps[i].classList.remove("error");
    inputs[i].value = "";
    formMess[i].innerText = "";
  }
  form.querySelector(".success").innerText = "";
}

const rgName = $(".register-form .full-name");
const rgEmail = $(".register-form .email");
const rgPass = $(".register-form .password");
const rgSubmit = $(".register-form .submit-btn");
const rgSuccess = $(".register-form .success");
const rgPassToggle = $("#register-pass-toggle");

rgName.addEventListener("input", () => {
  requiredField(rgName);
  rgSuccess.innerText = "";
});

rgEmail.addEventListener("input", () => {
  emailValidator(rgEmail);
  rgSuccess.innerText = "";
});

rgPass.addEventListener("input", () => {
  requiredField(rgPass);
  rgSuccess.innerText = "";
});

rgSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (rgValidateAll()) {
    rgSuccess.innerText = "Đăng ký thành công";
  }
});

rgPassToggle.addEventListener("change", handleShowPassword);