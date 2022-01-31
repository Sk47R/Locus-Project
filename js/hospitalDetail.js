const login = document.getElementById("login");
const register = document.getElementById("register");
const hide = document.getElementById("hide");
const hideRegister = document.getElementById("hide-register");

login.addEventListener("click", () => {
  hide.classList.toggle("hide");
});
register.addEventListener("click", () => {
  hideRegister.classList.toggle("hide-register");
});
