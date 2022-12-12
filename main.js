const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");

const btn = document.querySelector(".btn");
const error = document.getElementById("pwerror");

btn.addEventListener("click", () => {
    if (password.value !== confirm.value) {
        password.className = "error";
        confirm.className = "error";
        error.textContent = "Passwords do not match!";
    }
});