const select = document.getElementById("myselect");
const amount = document.getElementById("amount");
const accountNumber = document.getElementById("accountNumber");

console.log(select);
select.addEventListener("change", () => {
  if (select.value === "birHospital") {
    amount.setAttribute("value", 200);
    accountNumber.setAttribute("value", "2020 - 20202 - 20202");
  }
  if (select.value === "sumeru") {
    amount.setAttribute("value", 550);
    accountNumber.setAttribute("value", "2020 - 20202 - 20202");
  }
  if (select.value === "alka") {
    amount.setAttribute("value", 500);
    accountNumber.setAttribute("value", "2020 - 20202 - 20202");
  }
  if (select.value === "patanHospital") {
    amount.setAttribute("value", 200);
    accountNumber.setAttribute("value", "2020 - 20202 - 20202");
  }
});
